import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();


console.log("Script started");

const logoutButton = $('.logout');
console.log("Button selected:", logoutButton);

logoutButton.on('click', async (e) => {
    console.log("Button clicked");
    e.preventDefault();

    signOut(auth)
    .then(() => {
        console.log('user logged out');
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