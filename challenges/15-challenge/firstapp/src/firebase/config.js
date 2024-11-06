// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgLM9_peB52-juBngX9_WYsEFp4C9gX5s",
  authDomain: "appfirebase-4f3ff.firebaseapp.com",
  projectId: "appfirebase-4f3ff",
  storageBucket: "appfirebase-4f3ff.firebasestorage.app",
  messagingSenderId: "143367915595",
  appId: "1:143367915595:web:b9e0d83ec24a8e66e165ce",
  measurementId: "G-RDLRQMXDBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };