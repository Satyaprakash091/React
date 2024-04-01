// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3wbTYaBKyjCiCYg4v8f1m6BbvqcfPNzM",
  authDomain: "react-bcbdf.firebaseapp.com",
  projectId: "react-bcbdf",
  storageBucket: "react-bcbdf.appspot.com",
  messagingSenderId: "542883935976",
  appId: "1:542883935976:web:f626126ee54279c17e3b5d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.Auth();
export default firebaseConfig