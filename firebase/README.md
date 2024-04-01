# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// Import the functions you need from the SDKs you need
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
const app = initializeApp(firebaseConfig);