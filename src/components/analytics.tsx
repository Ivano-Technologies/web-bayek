"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  loadGoogleAnalytics,
  readStoredConsent,
  storeConsent,
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
  const stored = useSyncExternalStore(
    subscribe,
    () => (measurementId ? readStoredConsent(window.localStorage) : null),
    pendingConsent,
  );
  const consent = chosen ?? stored;

  useEffect(() => {
    if (!measurementId || consent !== "accepted") return;
    loadGoogleAnalytics(measurementId);
  }, [measurementId, consent]);

  if (!measurementId || consent === "pending" || consent !== null) {
    return null;
  }

  function choose(next: Consent) {
    storeConsent(window.localStorage, next);
    setChosen(next);
  }

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie notice">
      <div className="wrap">
        <p>
          We use Google Analytics to understand how the site is used, only if
          you accept. See our <Link href="/privacy">privacy notice</Link>.
        </p>
        <div className="cookie-banner-actions">
          <button className="btn" type="button" onClick={() => choose("accepted")}>
            Accept
          </button>
          <button
            className="btn ghost"
            type="button"
            onClick={() => choose("declined")}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
