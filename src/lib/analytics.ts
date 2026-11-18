export const CONSENT_STORAGE_KEY = "bayek-analytics-consent";
export const GA_SCRIPT_ID = "ga-gtag";
const COOKIE_SETTINGS_EVENT = "bayek-cookie-settings";

export type Consent = "accepted" | "declined";

type GaWindow = Window & {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
};

export function getMeasurementId(
  value: string | undefined = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
): string {
  return value?.trim() ?? "";
}

export function gaScriptUrl(measurementId: string): string {
  return `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
}

export function readStoredConsent(
  storage: Pick<Storage, "getItem">,
): Consent | null {
  try {
    const value = storage.getItem(CONSENT_STORAGE_KEY);
    if (value === "accepted" || value === "declined") return value;
    return null;
  } catch {
    return null;
  }
}

export function storeConsent(
  storage: Pick<Storage, "setItem">,
  consent: Consent,
): void {
  try {
    storage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // Ignore quota / private-mode failures; the in-memory choice still applies.
  }
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}

export function subscribeCookieSettings(onOpen: () => void): () => void {
  window.addEventListener(COOKIE_SETTINGS_EVENT, onOpen);
  return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, onOpen);
}

export function loadGoogleAnalytics(
  measurementId: string,
  win: Window = window,
): void {
  if (!measurementId) return;

  const doc = win.document;
  if (doc.getElementById(GA_SCRIPT_ID)) return;

  const gaWindow = win as GaWindow;
  gaWindow.dataLayer = gaWindow.dataLayer || [];
  gaWindow.gtag = function gtag(...args: unknown[]) {
    gaWindow.dataLayer.push(args);
  };
  gaWindow.gtag("js", new Date());
  gaWindow.gtag("config", measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
  });

  const script = doc.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = gaScriptUrl(measurementId);
  doc.head.appendChild(script);
}
