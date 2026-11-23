import {
  type Analytics,
  getAnalytics,
  isSupported,
  logEvent,
} from "firebase/analytics";

import { app } from "@/lib/firebase";

let analyticsPromise: Promise<Analytics | null> | undefined;

// Browser-only: Analytics needs window/cookies and is unsupported in some environments.
export function initAnalytics(): Promise<Analytics | null> {
  analyticsPromise ??= isSupported()
    .then((supported) => (supported ? getAnalytics(app) : null))
    .catch(() => null);
  return analyticsPromise;
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  void initAnalytics().then((analytics) => {
    if (analytics) logEvent(analytics, name, params);
  });
}

export function trackPageView(url: string) {
  const location = new URL(url, window.location.origin);
  trackEvent("page_view", {
    page_location: location.href,
    page_path: location.pathname,
  });
}
