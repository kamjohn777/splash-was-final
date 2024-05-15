// import { doc } from "firebase/firestore";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBmno2mvP8YTKKlBdcBb6pPn3l5cb8pKJA",
    authDomain: "splash-wash-f27d8.firebaseapp.com",
    databaseURL: "https://splash-wash-f27d8-default-rtdb.firebaseio.com/",
    projectId: "splash-wash-f27d8",
    storageBucket: "splash-wash-f27d8.appspot.com",
    messagingSenderId: "1072800525434",
    appId: "1:1072800525434:web:7b423933d321c7e963dfc3",
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
document.querySelector('.alert-msg').style.display = 'block';
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