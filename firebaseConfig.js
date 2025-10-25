// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAysyQ_15rVtYdBTV6rvawwUOVKLaHj2nE",
  authDomain: "stopsigara-dbb7a.firebaseapp.com",
  projectId: "stopsigara-dbb7a",
  storageBucket: "stopsigara-dbb7a.firebasestorage.app",
  messagingSenderId: "690845394417",
  appId: "1:690845394417:web:699c91c4538e7d258b9050",
  measurementId: "G-X3M3Y8E7B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Export auth for use in other files
export { auth };
export default app;