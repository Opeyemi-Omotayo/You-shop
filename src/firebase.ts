// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "you-shop-ca951.firebaseapp.com",
  projectId: "you-shop-ca951",
  storageBucket: "you-shop-ca951.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSANGING_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID ,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app}
