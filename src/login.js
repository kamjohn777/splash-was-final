import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

console.log("Script started");

const loginForm = $('.login');
console.log("Form selected:", loginForm);

loginForm.on('submit', async (e) => {
    console.log("Form submitted");
    e.preventDefault();

    const email = loginForm.find('input[name="email"]').val();
    const password = loginForm.find('input[name="password"]').val();
    console.log("Email:", email, "Password:", password);

    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('user logged in:', cred.user);
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