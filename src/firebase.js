import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID"
};

// Initialize app
const app = initializeApp(firebaseConfig);

// Analytics (optional)
let analytics;
try {
  analytics = getAnalytics(app);
} catch (err) {
  console.warn("Analytics not initialized:", err);
}

// Auth + providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

// Microsoft, Apple, and Yahoo providers
const microsoftProvider = new OAuthProvider("microsoft.com");
const appleProvider = new OAuthProvider("apple.com");
const yahooProvider = new OAuthProvider("yahoo.com"); // Add this line

// Exports
export default app;
export {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  microsoftProvider,
  appleProvider,
  yahooProvider // Add this export
};