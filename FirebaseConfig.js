import {
  AUTH_KEY,
  AUTH_DOMAIN,
  AUTH_PROJECT_ID,
  AUTH_STORAGE_BUCKET,
  AUTH_MESSAGING_SENDER_ID,
  AUTH_APP_ID,
} from "@env";
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: AUTH_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: AUTH_PROJECT_ID,
  storageBucket: AUTH_STORAGE_BUCKET,
  messagingSenderId: AUTH_MESSAGING_SENDER_ID,
  appId: AUTH_APP_ID,
};

const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
