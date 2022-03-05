// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJSvP_7hl0YQfmbqD0BCqk9f6vha2Pomo",
  authDomain: "zoolch-contact.firebaseapp.com",
  projectId: "zoolch-contact",
  storageBucket: "zoolch-contact.appspot.com",
  messagingSenderId: "872561211929",
  appId: "1:872561211929:web:0152903ed3612fbdb38888",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const zoolchApp = initializeApp(firebaseConfig);

const zoolchFirestore = zoolchApp.firestore();

export { zoolchFirestore };
