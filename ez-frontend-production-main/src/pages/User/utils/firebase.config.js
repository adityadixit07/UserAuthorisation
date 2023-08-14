import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAIuXNdaBI1fPodBzm8M4c4xnadAFc-hjQ",
//   authDomain: "ezage-mobile-verification.firebaseapp.com",
//   projectId: "ezage-mobile-verification",
//   storageBucket: "ezage-mobile-verification.appspot.com",
//   messagingSenderId: "636935355767",
//   appId: "1:636935355767:web:3566e28e83e44e14c07572",
//   measurementId: "G-28R66Y7K1E",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDv4U5QYldu2gNa5jqZ4K43c1q3zvG6yvw",
//   authDomain: "ezage-1e23a.firebaseapp.com",
//   projectId: "ezage-1e23a",
//   storageBucket: "ezage-1e23a.appspot.com",
//   messagingSenderId: "698864415104",
//   appId: "1:698864415104:web:9ab5aab52fff0079309165",
//   measurementId: "G-9S7B4R3M5M"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCROc8_TSNVXHdkyV5TCq6Gd0Inj0VpfTc",
//   authDomain: "otp-test-first.firebaseapp.com",
//   projectId: "otp-test-first",
//   storageBucket: "otp-test-first.appspot.com",
//   messagingSenderId: "383032970258",
//   appId: "1:383032970258:web:1db072aba00a24a8ec1ccb"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDtRoy16mBUnip62TeC9AwsLhQ49ZS7y10",
  authDomain: "ez-the-one-app.firebaseapp.com",
  projectId: "ez-the-one-app",
  storageBucket: "ez-the-one-app.appspot.com",
  messagingSenderId: "689982969194",
  appId: "1:689982969194:web:b372fd9d08cfbca5534113",
  measurementId: "G-T5X53PMRFV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();