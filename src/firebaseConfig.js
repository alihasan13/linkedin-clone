// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj1OIK-p4osKD4MlUxdu6DZKHDUL2wwtM",
  authDomain: "linkedin-clone-f4186.firebaseapp.com",
  projectId: "linkedin-clone-f4186",
  storageBucket: "linkedin-clone-f4186.appspot.com",
  messagingSenderId: "90541481068",
  appId: "1:90541481068:web:8b57ff98ed26d8bcf28c49",
  measurementId: "G-4V3NSNT5FQ"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);