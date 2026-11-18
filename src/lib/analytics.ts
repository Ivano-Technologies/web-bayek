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

/** Remove _ga and _ga_* cookies on this host and its parent domains. */
export function clearAnalyticsCookies(win: Window = window): void {
  const names = win.document.cookie
    .split(";")
    .map((part) => part.split("=")[0]?.trim() ?? "")
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  if (names.length === 0) {
    return;
  }
  const labels = win.location.hostname.split(".");
  const domains: string[] = [""];
  for (let i = 0; i < labels.length - 1; i += 1) {
    const suffix = labels.slice(i).join(".");
    domains.push(`; domain=${suffix}`);
    domains.push(`; domain=.${suffix}`);
  }
  for (const name of names) {
    for (const domain of domains) {
      win.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

export function disableGoogleAnalytics(
  measurementId: string,
  win: Window = window,
): void {
  if (!measurementId) return;
  Reflect.set(win, `ga-disable-${measurementId}`, true);
}

export function withdrawGoogleAnalytics(
  measurementId: string,
  win: Window = window,
): void {
  clearAnalyticsCookies(win);
  disableGoogleAnalytics(measurementId, win);
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
  // Must be a regular function using `arguments`: gtag.js ignores Arrays, and a
  // rest parameter is a real Array. Official stub:
  // function gtag(){ dataLayer.push(arguments) }
  gaWindow.gtag = function gtag(
    // Rest args exist only to match the gtag type; do not push them.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- signature only; push `arguments`
    ..._args: unknown[]
  ) {
    // eslint-disable-next-line prefer-rest-params -- gtag.js requires the Arguments object
    gaWindow.dataLayer.push(arguments);
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
