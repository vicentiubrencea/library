// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHhE8siJPVRg1ZprEOTgr_y9VhQJBNVR0",
  authDomain: "virtual-library-ba9cd.firebaseapp.com",
  projectId: "virtual-library-ba9cd",
  storageBucket: "virtual-library-ba9cd.appspot.com",
  messagingSenderId: "242836379346",
  appId: "1:242836379346:web:e48b178260d12b72bfbf0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);