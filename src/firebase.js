// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTYofSZGNRKorhHEubO-jrMt3b7xId-hA",
  authDomain: "react-disney-clone-2014e.firebaseapp.com",
  projectId: "react-disney-clone-2014e",
  storageBucket: "react-disney-clone-2014e.appspot.com",
  messagingSenderId: "451833405322",
  appId: "1:451833405322:web:9afca6dcdeadbb7c493273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;