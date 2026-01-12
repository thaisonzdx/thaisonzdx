import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "./firebase";

// Analytics event names
export const AnalyticsEvents = {
  // Page events
  PAGE_VIEW: "page_view",
  
  // Navigation events
  NAVIGATION_CLICK: "navigation_click",
  EXTERNAL_LINK_CLICK: "external_link_click",
  
  // User engagement
  BUTTON_CLICK: "button_click",
  FORM_SUBMIT: "form_submit",
  SEARCH: "search",
  
  // Content interaction
  CONTENT_VIEW: "content_view",
  CONTENT_SHARE: "content_share",
  DOWNLOAD: "download",
  
  // Social media
  SOCIAL_CLICK: "social_click",
  
  // Error tracking
  ERROR: "error",
} as const;

export type AnalyticsEventName = typeof AnalyticsEvents[keyof typeof AnalyticsEvents];

// Helper function to safely log events
const logAnalyticsEvent = (
  eventName: AnalyticsEventName,
  eventParams?: Record<string, unknown>
) => {
  try {
    const analytics = getFirebaseAnalytics();
    if (analytics) {
      logEvent(analytics, eventName as string, eventParams);
    }
  } catch (error) {
    console.error("Analytics error:", error);
  }
};

// Page tracking
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  logAnalyticsEvent(AnalyticsEvents.PAGE_VIEW, {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

// Navigation tracking
export const trackNavigation = (destination: string, source?: string) => {
  logAnalyticsEvent(AnalyticsEvents.NAVIGATION_CLICK, {
    destination,
    source,
  });
};

export const trackExternalLink = (url: string, linkText?: string) => {
  logAnalyticsEvent(AnalyticsEvents.EXTERNAL_LINK_CLICK, {
    url,
    link_text: linkText,
  });
};

// User interaction tracking
export const trackButtonClick = (buttonName: string, location?: string) => {
  logAnalyticsEvent(AnalyticsEvents.BUTTON_CLICK, {
    button_name: buttonName,
    location,
  });
};

export const trackFormSubmit = (formName: string, success: boolean) => {
  logAnalyticsEvent(AnalyticsEvents.FORM_SUBMIT, {
    form_name: formName,
    success,
  });
};

export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  logAnalyticsEvent(AnalyticsEvents.SEARCH, {
    search_term: searchTerm,
    results_count: resultsCount,
  });
};

// Content tracking
export const trackContentView = (contentId: string, contentType: string, contentTitle?: string) => {
  logAnalyticsEvent(AnalyticsEvents.CONTENT_VIEW, {
    content_id: contentId,
    content_type: contentType,
    content_title: contentTitle,
  });
};

export const trackContentShare = (contentId: string, method: string) => {
  logAnalyticsEvent(AnalyticsEvents.CONTENT_SHARE, {
    content_id: contentId,
    method,
  });
};

export const trackDownload = (fileName: string, fileType?: string) => {
  logAnalyticsEvent(AnalyticsEvents.DOWNLOAD, {
    file_name: fileName,
    file_type: fileType,
  });
};

// Social media tracking
export const trackSocialClick = (platform: string, action?: string) => {
  logAnalyticsEvent(AnalyticsEvents.SOCIAL_CLICK, {
    platform,
    action,
  });
};

// Error tracking
export const trackError = (errorMessage: string, errorCode?: string, fatal?: boolean) => {
  logAnalyticsEvent(AnalyticsEvents.ERROR, {
    error_message: errorMessage,
    error_code: errorCode,
    fatal: fatal || false,
  });
};

// Custom event tracking
export const trackCustomEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  logAnalyticsEvent(eventName as AnalyticsEventName, eventParams);
};
