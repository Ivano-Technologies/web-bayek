import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { afterEach, describe, expect, test, vi } from "vitest";
import {
  CONSENT_STORAGE_KEY,
  gaScriptUrl,
  getMeasurementId,
  withdrawGoogleAnalytics,
} from "@/lib/analytics";
import { Analytics, CookieSettingsButton } from "./analytics";

vi.mock("next/link", () => ({
  default: function MockLink({
    href,
    children,
  }: {
    href: string;
    children: ReactNode;
  }) {
    return <a href={href}>{children}</a>;
  },
}));

const TEST_ID = "G-TESTMEASURE1";

function gaRequests(): HTMLScriptElement[] {
  return [...document.querySelectorAll("script")].filter((script) =>
    script.src.includes("googletagmanager.com/gtag/js"),
  );
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("cookie-banner-open");
  document.documentElement.style.removeProperty("--cookie-banner-height");
  document.cookie.split(";").forEach((part) => {
    const name = part.split("=")[0]?.trim();
    if (name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
  for (const script of gaRequests()) script.remove();
  const win = window as unknown as {
    dataLayer?: unknown;
    gtag?: unknown;
  } & Record<string, unknown>;
  delete win.dataLayer;
  delete win.gtag;
  delete win[`ga-disable-${TEST_ID}`];
});

describe("Analytics", () => {
  test("does not request GA before consent", async () => {
    render(<Analytics measurementId={TEST_ID} />);

    expect(
      await screen.findByRole("region", { name: "Cookie notice" }),
    ).toBeTruthy();
    expect(gaRequests()).toHaveLength(0);
  });

  test("requests GA after Accept", async () => {
    const user = userEvent.setup();
    render(<Analytics measurementId={TEST_ID} />);

    await user.click(await screen.findByRole("button", { name: "Accept" }));

    await waitFor(() => {
      expect(gaRequests().map((script) => script.src)).toEqual([
        gaScriptUrl(TEST_ID),
      ]);
    });
    expect(screen.queryByRole("region", { name: "Cookie notice" })).toBeNull();
    expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("accepted");
  });

  test("does not request GA on Decline", async () => {
    const user = userEvent.setup();
    render(<Analytics measurementId={TEST_ID} />);

    await user.click(await screen.findByRole("button", { name: "Decline" }));

    expect(gaRequests()).toHaveLength(0);
    expect(screen.queryByRole("region", { name: "Cookie notice" })).toBeNull();
    expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("declined");
  });

  test("is a no-op without a measurement id", async () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");
    render(<Analytics />);

    await waitFor(() => {
      expect(screen.queryByRole("region", { name: "Cookie notice" })).toBeNull();
    });
    expect(gaRequests()).toHaveLength(0);
    expect(getMeasurementId(undefined)).toBe("");
    expect(getMeasurementId("  ")).toBe("");
  });

  test("Accept and Decline use the same button style", async () => {
    render(<Analytics measurementId={TEST_ID} />);

    const accept = await screen.findByRole("button", { name: "Accept" });
    const decline = screen.getByRole("button", { name: "Decline" });
    expect(accept.className).toBe(decline.className);
    expect(accept.className.split(/\s+/)).toContain("btn");
    expect(accept.className.split(/\s+/)).not.toContain("ghost");
  });

  test("Cookie settings reopens the banner after a choice", async () => {
    const user = userEvent.setup();
    render(
      <>
        <CookieSettingsButton measurementId={TEST_ID} />
        <Analytics measurementId={TEST_ID} />
      </>,
    );

    await user.click(await screen.findByRole("button", { name: "Accept" }));
    expect(screen.queryByRole("region", { name: "Cookie notice" })).toBeNull();

    await user.click(screen.getByRole("button", { name: "Cookie settings" }));
    expect(
      await screen.findByRole("region", { name: "Cookie notice" }),
    ).toBeTruthy();
  });

  test("hides Cookie settings when the measurement id is unset", () => {
    render(<CookieSettingsButton measurementId="" />);
    expect(
      screen.queryByRole("button", { name: "Cookie settings" }),
    ).toBeNull();
  });

  test("withdraw expires _ga cookies on host and domain variants and sets ga-disable", () => {
    const writes: string[] = [];
    const win = {
      location: { hostname: "bayek.org" },
      document: {
        get cookie() {
          return "_ga=GA1.1.x; _ga_TEST1=GS1.1.x; session=keep";
        },
        set cookie(value: string) {
          writes.push(value);
        },
      },
    };

    withdrawGoogleAnalytics(TEST_ID, win as unknown as Window);

    expect(writes).toEqual([
      "_ga=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",
      "_ga=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=bayek.org",
      "_ga=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.bayek.org",
      "_ga_TEST1=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",
      "_ga_TEST1=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=bayek.org",
      "_ga_TEST1=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.bayek.org",
    ]);
    expect(Reflect.get(win, `ga-disable-${TEST_ID}`)).toBe(true);
  });
});
