import {
  type Crashlytics,
  getCrashlytics,
  recordError,
} from "firebase/crashlytics";

import { app } from "@/lib/firebase";

let crashlytics: Crashlytics | undefined;

// Browser-only: registers global `error` and `unhandledrejection` listeners.
export function initCrashlytics(): Crashlytics {
  crashlytics ??= getCrashlytics(app, {
    appVersion: process.env.NEXT_PUBLIC_APP_VERSION,
  });
  return crashlytics;
}

// For handled errors that never reach the global listeners.
export function reportError(
  error: unknown,
  attributes?: Record<string, string | number | boolean>,
) {
  recordError(initCrashlytics(), error, attributes);
}
