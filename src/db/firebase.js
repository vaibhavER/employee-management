// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // if using Firestore
//import { getAuth } from "firebase/auth";             // if using Authentication


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_CLIENT,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: "employee-management-5f0cb",
  storageBucket: "employee-management-5f0cb.firebasestorage.app",
  messagingSenderId: "86489659217",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-BECT2WTN5G"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export services
const firebase = getFirestore(app);
//const auth = getAuth(app);


export { firebase };
