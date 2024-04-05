import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const auth = getAuth();




console.log("Script started");
const signUpForm = $('.register');
console.log("Form selected:", signUpForm);

signUpForm.on('submit', async (e) => {
    console.log("Form submitted");
    e.preventDefault();

    const email = signUpForm.find('input[name="email"]').val();
    const password = signUpForm.find('input[name="password"]').val();
    console.log("Email:", email, "Password:", password);

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('user created:', cred.user);
        signUpForm.reset();
    })
    .catch(err => {
        console.log(err.message);
    });
});

onAuthStateChanged(auth, user => {
    if(user){
        console.log('user logged in:', user);
        window.location.assign('Home.html');
    }else{
        console.log('user logged out');
        window.location.assign('Login.html');
    }
});