// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRkE1-3lQHUozb_-HUPuI9bGA7fNBdBjU",
  authDomain: "sumansourabh-c2d6a.firebaseapp.com",
  projectId: "sumansourabh-c2d6a",
  storageBucket: "sumansourabh-c2d6a.appspot.com",
  messagingSenderId: "199578535552",
  appId: "1:199578535552:web:79d6b232a8dced3e6fc865",
  measurementId: "G-9RLEFPMZE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);