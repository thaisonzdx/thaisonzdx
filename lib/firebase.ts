import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: ReturnType<typeof initializeApp> | null = null;
let analytics: ReturnType<typeof getAnalytics> | null = null;

const getApp = () => {
  if (typeof window === "undefined") {
    return null;
  }
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
};

export const getFirebaseAnalytics = () => {
  if (typeof window === "undefined") {
    return null;
  }
  
  const firebaseApp = getApp();
  if (!firebaseApp) {
    return null;
  }
  
  if (!analytics) {
    analytics = getAnalytics(firebaseApp);
  }
  
  return analytics;
};
