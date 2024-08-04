
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBWpWdMSN_houkua1ceZLtTwewxAX5m6fA",
  authDomain: "inventory-management-app-47cc8.firebaseapp.com",
  projectId: "inventory-management-app-47cc8",
  storageBucket: "inventory-management-app-47cc8.appspot.com",
  messagingSenderId: "167291921152",
  appId: "1:167291921152:web:f6f11074313498359c09e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };