// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcafpSUjTjpey7g710DqUgHWQxoWBeNbQ",
    authDomain: "react-aa795.firebaseapp.com",
    projectId: "react-aa795",
    storageBucket: "react-aa795.appspot.com",
    messagingSenderId: "449119811022",
    appId: "1:449119811022:web:9104d3aab7e6e2a7f1279f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)