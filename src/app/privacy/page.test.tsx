import { cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, test, vi } from "vitest";
import PrivacyPage from "./page";

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

const GA_COOKIE_PARAGRAPH =
  "Google Analytics runs only after you choose Accept on the cookie notice. Google may then set cookies and record how the site is used. If you choose Decline, we do not load analytics. Your choice is stored in this browser. Clearing this site's data shows the notice again.";

const GA_SHARE_ITEM =
  "Google LLC, if you accept analytics. Google Analytics then processes usage data. We do not use it for advertising.";

const GA_RETENTION_ITEM =
  "Google Analytics records: until you Decline or we delete them. Google's cookies last up to 2 years.";

const NO_COOKIES_PARAGRAPH =
  "This website does not set cookies and does not use analytics or advertising trackers. If that changes we will add a cookie notice and ask for your consent first.";

function pageText(): string {
  return document.body.textContent?.replace(/\s+/g, " ") ?? "";
}

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
});

describe("PrivacyPage", () => {
  test("keeps Google Analytics copy when the measurement id is set", () => {
    vi.stubEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID", "G-TESTMEASURE1");
    render(<PrivacyPage />);

    const text = pageText();
    expect(text).toContain(GA_COOKIE_PARAGRAPH);
    expect(text).toContain(GA_SHARE_ITEM);
    expect(text).toContain(GA_RETENTION_ITEM);
    expect(text).toContain(
      "Usage data such as pages viewed, device and browser type, and approximate location",
    );
    expect(text).not.toContain(NO_COOKIES_PARAGRAPH);
  });

  test("omits Google Analytics copy when the measurement id is unset", () => {
    vi.stubEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID", "");
    render(<PrivacyPage />);

    expect(screen.queryByText(/Google Analytics/)).toBeNull();
    expect(screen.queryByText(/Google LLC/)).toBeNull();
    expect(screen.queryByText(/If you accept analytics/)).toBeNull();
    expect(screen.queryByText(/see below/i)).toBeNull();
    expect(screen.getByRole("heading", { name: "Cookies" })).toBeTruthy();
    expect(pageText()).toContain(NO_COOKIES_PARAGRAPH);
    expect(screen.getByText(/Vercel Inc/)).toBeTruthy();
    expect(
      screen.getByText(/Hosting server logs: kept for no more than 30 days/),
    ).toBeTruthy();
  });
});
