import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import GoogleAuthProvider and signInWithPopup

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnprhi3KUi0_SQ1ZCslHFY8QtjWOA2IfY",
    authDomain: "bits-hackathon-b8efd.firebaseapp.com",
    projectId: "bits-hackathon-b8efd",
    storageBucket: "bits-hackathon-b8efd.firebasestorage.app",
    messagingSenderId: "707523650165",
    appId: "1:707523650165:web:afa5d9db7c01ee02734e3c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the auth service
const auth = getAuth(app);

// Set up Google Auth Provider
const provider = new GoogleAuthProvider();

// Export app, auth, provider, and signInWithPopup
export { app, auth, provider, signInWithPopup };
