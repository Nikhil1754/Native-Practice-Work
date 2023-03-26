// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHhZAgK8Njo6cnmDmt70oJ6XrqRKm0Nr0",
  authDomain: "reactnativeauth-3421a.firebaseapp.com",
  projectId: "reactnativeauth-3421a",
  storageBucket: "reactnativeauth-3421a.appspot.com",
  messagingSenderId: "930924839078",
  appId: "1:930924839078:web:5f2daa69d24ff409f6f467",
  measurementId: "G-1KP8XJCPPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);