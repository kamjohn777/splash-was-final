// import { doc } from "firebase/firestore";
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
const contactFormHomePageDB = ref(db, "contactFormHomePage");

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // get values
  let selectService = getElementVal("service-request");
  let name = getElementVal("name");
  let phone = getElementVal("phone");

  saveDetails(selectService, name, phone);

//   enable alert after form submission
setTimeout(() => {
    document.querySelector('.alert-msg').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert-msg').style.display = 'none';
    }, 2000);
}, 500);




console.log(selectService, name, phone);
}

const saveDetails = (selectService, name, phone) => {
    const newContactFormHomePageDB = push(contactFormHomePageDB);
    set(newContactFormHomePageDB, {
      selectService: selectService,
      name: name,
      phone: phone,
    });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};