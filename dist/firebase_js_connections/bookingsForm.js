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
const bookingsForm = ref(db, "bookingsForm");

// const bookingFormElement = document.getElementById('div-booking-form');

// bookingFormElement.addEventListener('submit', function(e) {
//     e.preventDefault();
//     bookingsFormSubmit();

// });

window.addEventListener('DOMContentLoaded', (event) => {
    const bookingFormElement = document.getElementById('div-booking-form');

    if (bookingFormElement) {
        bookingFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            bookingsFormSubmit();
            console.log("Form submitted");
            window.location.href = "../Payments.html";
        });
    }
});

// document.getElementById('booking-form-sub-btn').addEventListener('submit', function(e) {
//     e.preventDefault();
//     bookingsFormSubmit();
// });

export function bookingsFormSubmit() {
    // e.preventDefault();

    // get values
    let date = getElementVal("dateInput");
    let time = getElementVal("timeInput");
    let firstName = getElementVal("firstName");
    let lastName = getElementVal("lastName");
    let email = getElementVal("email");
    let phone = getElementVal("phoneInput");
    let additionalQuestions = getElementVal("additionalQuestions");
    let vehicle = getElementVal("vehicle");

    console.log(date, time, firstName, lastName, email, phone, additionalQuestions, vehicle);

    return saveDetails(date, time, firstName, lastName, email, phone, additionalQuestions, vehicle);

    // window.location.href = "../Payments.html";
}

const saveDetails = (date, time, firstName, lastName, email, phone, additionalQuestions, vehicle) => {
    const newBookingsForm = push(bookingsForm);
   return set(newBookingsForm, {
      date: date,
      time: time,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      additionalQuestions: additionalQuestions,
      vehicle: vehicle
    });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};