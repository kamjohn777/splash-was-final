// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword,signOut, signInWithEmailAndPassword } from "firebase/auth";
// // import { sign } from "crypto";

// const firebaseConfig = {
//   apiKey: "AIzaSyBmno2mvP8YTKKlBdcBb6pPn3l5cb8pKJA",
//   authDomain: "splash-wash-f27d8.firebaseapp.com",
//   projectId: "splash-wash-f27d8",
//   storageBucket: "splash-wash-f27d8.appspot.com",
//   messagingSenderId: "1072800525434",
//   appId: "1:1072800525434:web:7b423933d321c7e963dfc3"
// };

// initializeApp(firebaseConfig);

// const db = getFirestore();
// const auth = getAuth();

// // signing up a user
// const signUpForm = document.querySelector(".signup");
// signUpForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const email = signUpForm.email.value;
//     const password = signUpForm.password.value;

//     // createUserWithEmailAndPassword(auth, signUpForm.email.value, signUpForm.password.value)
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((cred) => {
//         console.log('user created:', cred.user);
//         signUpForm.reset();
//     })
//     .catch(err => {
//         console.log(err.message);
//     });
// });

// // logging in and out a user

// const logoutButton = document.querySelector(".logout");
// logoutButton.addEventListener("click", async (e) => {
//     e.preventDefault();
//     signOut(auth)
//     .then(() => {
//         console.log('user signed out');
//     })
//     .catch(err => { console.log(err.message); });
// });

// const logInForm = document.querySelector(".login");
// logInForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const email = logInForm.email.value;
//     const password = logInForm.password.value;

//     signInWithEmailAndPassword(auth, logInForm.email.value, logInForm.password.value)
//     .then((cred) => {
//         console.log('user logged in:', cred.user);
//         logInForm.reset();
//     })
//     .catch(err => {
//         console.log(err.message);
//     });
// });