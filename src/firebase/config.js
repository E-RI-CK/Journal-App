// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2yKFv89BtcR3-U8m_xKeq9cvCwUxebYk",
    authDomain: "react-proyectos-d37ff.firebaseapp.com",
    projectId: "react-proyectos-d37ff",
    storageBucket: "react-proyectos-d37ff.appspot.com",
    messagingSenderId: "473402603495",
    appId: "1:473402603495:web:2cff5693d591ced235af42"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FireBaseDB = getFirestore(FirebaseApp);