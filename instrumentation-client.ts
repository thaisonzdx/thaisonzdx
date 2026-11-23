import { initAnalytics, trackPageView } from "@/lib/firebase/analytics";

// Initial page_view is sent automatically by Firebase Analytics on init.
void initAnalytics();

export function onRouterTransitionStart(url: string) {
  trackPageView(url);
}
