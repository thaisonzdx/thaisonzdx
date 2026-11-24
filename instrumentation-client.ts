import { initAnalytics, trackPageView } from "@/lib/firebase/analytics";
import { initCrashlytics } from "@/lib/firebase/crashlytics";

// Runs before hydration so errors during startup are captured too.
initCrashlytics();

// Initial page_view is sent automatically by Firebase Analytics on init.
void initAnalytics();

export function onRouterTransitionStart(url: string) {
  trackPageView(url);
}
