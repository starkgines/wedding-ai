import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxkiKg2E-vO_s5YQgXSn-pG_EyKeYiAfI",
    authDomain: "mi-boda-4533f.firebaseapp.com",
    projectId: "mi-boda-4533f",
    storageBucket: "mi-boda-4533f.firebasestorage.app",
    messagingSenderId: "538756896063",
    appId: "1:538756896063:web:f5fccb4fe6aa86498cef8a"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);