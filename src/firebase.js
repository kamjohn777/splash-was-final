import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// import { sign } from "crypto";


const firebaseConfig = {
  apiKey: "AIzaSyBmno2mvP8YTKKlBdcBb6pPn3l5cb8pKJA",
  authDomain: "splash-wash-f27d8.firebaseapp.com",
  databaseurl: "https://splash-wash-f27d8-default-rtdb.firebaseio.com/",
  projectId: "splash-wash-f27d8",
  storageBucket: "splash-wash-f27d8.appspot.com",
  messagingSenderId: "1072800525434",
  appId: "1:1072800525434:web:7b423933d321c7e963dfc3"
};

initializeApp(firebaseConfig);

const db = getFirestore();
// const auth = getAuth();

// console.log("Script started");

// const signUpForm = $('.register');
// console.log("Form selected:", signUpForm);

// signUpForm.on('submit', async (e) => {
//     console.log("Form submitted");
//     e.preventDefault();

//     const email = signUpForm.find('input[name="email"]').val();
//     const password = signUpForm.find('input[name="password"]').val();
//     console.log("Email:", email, "Password:", password);

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((cred) => {
//         console.log('user created:', cred.user);
//         signUpForm.reset();
//     })
//     .catch(err => {
//         console.log(err.message);
//     });
// });

// onAuthStateChanged(auth, user => {
//     if(user){
//         console.log('user logged in:', user);
//         window.location.assign('../dist/Home.html');
//     }else{
//         console.log('user logged out');
//         window.location.assign('../dist/Login.html');
//     }
// });

// console.log("Script ended");