// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import store from "./Redux/store"
import { setUser,signOut } from "./Redux/store"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmpKvCbDbzUhCeRaOYq5pRWANDiBBNVUU",
    authDomain: "react-demo-3a348.firebaseapp.com",
    projectId: "react-demo-3a348",
    storageBucket: "react-demo-3a348.appspot.com",
    messagingSenderId: "776610901755",
    appId: "1:776610901755:web:76918b99f9e40501e54a5e"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
onAuthStateChanged(auth,(user) =>
{
    if (user)
    {
        store.dispatch(setUser({
            email: user.email,
            password:user.password,
            
     }))   
    }
    else
    {
     store.dispatch(signOut())   
    }
})
