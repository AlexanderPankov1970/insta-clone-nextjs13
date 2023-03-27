// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };

/////////////////////////////
// const firebaseConfig = {
//   apiKey: "AIzaSyAAKLVSgJ9rD90iI-EpaoX99THl8gEXTQc",
//   authDomain: "insta-clone-nextjs13.firebaseapp.com",
//   projectId: "insta-clone-nextjs13",
//   storageBucket: "insta-clone-nextjs13.appspot.com",
//   messagingSenderId: "563020962308",
//   appId: "1:563020962308:web:432e17377015c7f97cb351",
// };
