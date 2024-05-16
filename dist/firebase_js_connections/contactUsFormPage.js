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
const contactUsFormPageDB = ref(db, "contactUsFormPage");