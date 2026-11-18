"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  clearAnalyticsCookies,
  loadGoogleAnalytics,
  openCookieSettings,
  readStoredConsent,
  storeConsent,
  subscribeCookieSettings,
  withdrawGoogleAnalytics,
  type Consent,
} from "@/lib/analytics";

function subscribe() {
  return () => {};
}

function pendingConsent(): "pending" {
  return "pending";
}

export function Analytics({
  measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "",
}: {
  measurementId?: string;
} = {}) {
  const [chosen, setChosen] = useState<Consent | null>(null);
  const [reopened, setReopened] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const stored = useSyncExternalStore(
    subscribe,
    () => (measurementId ? readStoredConsent(window.localStorage) : null),
    pendingConsent,
  );
  const consent = chosen ?? stored;
  const visible =
    Boolean(measurementId) &&
    consent !== "pending" &&
    (consent === null || reopened);

  useEffect(() => subscribeCookieSettings(() => setReopened(true)), []);

  useEffect(() => {
    if (!measurementId || consent !== "accepted") return;
    loadGoogleAnalytics(measurementId);
  }, [measurementId, consent]);

  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.classList.remove("cookie-banner-open");
      root.style.removeProperty("--cookie-banner-height");
      return;
    }

    const node = bannerRef.current;
    function applyHeight() {
      root.classList.add("cookie-banner-open");
      if (node) {
        root.style.setProperty("--cookie-banner-height", `${node.offsetHeight}px`);
      }
    }

    applyHeight();
    const observer =
      node && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(applyHeight)
        : null;
    if (node) observer?.observe(node);
    return () => {
      observer?.disconnect();
      root.classList.remove("cookie-banner-open");
      root.style.removeProperty("--cookie-banner-height");
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  function choose(next: Consent) {
    const previous = consent;
    storeConsent(window.localStorage, next);
    setChosen(next);
    setReopened(false);
    if (next === "declined") {
      if (previous === "accepted" && measurementId) {
        withdrawGoogleAnalytics(measurementId);
        window.location.reload();
        return;
      }
      clearAnalyticsCookies();
    }
  }

  return (
    <div
      ref={bannerRef}
      className="cookie-banner"
      role="region"
      aria-label="Cookie notice"
    >
      <div className="wrap">
        <p>
          We use Google Analytics to understand how the site is used, only if
          you accept. See our <Link href="/privacy">privacy notice</Link>.
        </p>
        <div className="cookie-banner-actions">
          <button className="btn" type="button" onClick={() => choose("accepted")}>
            Accept
          </button>
          <button className="btn" type="button" onClick={() => choose("declined")}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton({
  measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "",
}: {
  measurementId?: string;
} = {}) {
  if (!measurementId) return null;

  return (
    <button type="button" className="cookie-settings" onClick={openCookieSettings}>
      Cookie settings
    </button>
  );
}
