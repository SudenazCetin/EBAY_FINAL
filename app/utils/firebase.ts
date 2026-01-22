// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyApd6fgqxWeyN4VQRLjr2REt0Ve2sl_Xcc",
  authDomain: "ebay-nuxt-final.firebaseapp.com",
  projectId: "ebay-nuxt-final",
  storageBucket: "ebay-nuxt-final.firebasestorage.app",
  messagingSenderId: "700656860406",
  appId: "1:700656860406:web:de5e76c421516563b340d7",
  measurementId: "G-WZYR36GM2X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };