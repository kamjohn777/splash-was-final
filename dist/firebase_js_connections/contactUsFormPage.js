import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

//  initialize firebase 
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// reference form database
const contactUsFormPageDB = ref(db, "contactUsFormPage");

document.getElementById('contact-us-form').addEventListener('submit', submitContactForm);

function submitContactForm(e) {
    e.preventDefault();
    
    // get values
    let firstName = getElementVal('first-name');
    let lastName = getElementVal('last-name');
    let email = getElementVal('email');
    let message = getElementVal('message');

    saveDetails(firstName, lastName, email, message);

     // Clear input fields
     document.getElementById('first-name').value = '';
     document.getElementById('last-name').value = '';
     document.getElementById('email').value = '';
     document.getElementById('message').value = '';

    setTimeout(() => {
        document.querySelector('.alert-msg').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.alert-msg').style.display = 'none';
        }, 2000);
    }, 500);

    console.log(firstName, lastName, email, message);
}

const saveDetails = (firstName, lastName, email, message) => {
    const newContactUsFormPageDB = push(contactUsFormPageDB);
    set(newContactUsFormPageDB, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
    });

}


// function gets the element values
const getElementVal = (id) => {
    return document.getElementById(id).value;
};