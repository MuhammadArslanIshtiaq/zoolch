import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2aUOtN7UPMuxhq1Uy6pmjUmNhBeElIuA",
  authDomain: "simple-contact-form-7f786.firebaseapp.com",
  projectId: "simple-contact-form-7f786",
  storageBucket: "simple-contact-form-7f786.appspot.com",
  messagingSenderId: "804708079561",
  appId: "1:804708079561:web:d71d4179d013c015cc3a18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
