// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN_9odI3fH2SVNOp-c2_Vpd27bZBa2dmM",
  authDomain: "almacenamientotodo-fd57c.firebaseapp.com",
  projectId: "almacenamientotodo-fd57c",
  storageBucket: "almacenamientotodo-fd57c.firebasestorage.app",
  messagingSenderId: "1016204143025",
  appId: "1:1016204143025:web:d64553350b5be32e17b590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)