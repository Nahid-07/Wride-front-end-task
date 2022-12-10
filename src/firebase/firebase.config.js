// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-edjNS6L72gNxcaZpvhwRIh-rdNqqWAE",
  authDomain: "wellfound-client-auth.firebaseapp.com",
  projectId: "wellfound-client-auth",
  storageBucket: "wellfound-client-auth.appspot.com",
  messagingSenderId: "832895953210",
  appId: "1:832895953210:web:6661617f98633b157f0803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app