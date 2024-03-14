// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1AFlylsi_RrZEJHLt7DxlveHq9K_nTdI",
  authDomain: "inventory-management-16e70.firebaseapp.com",
  projectId: "inventory-management-16e70",
  storageBucket: "inventory-management-16e70.appspot.com",
  messagingSenderId: "746616320836",
  appId: "1:746616320836:web:a081ced1887d04ade25d11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;