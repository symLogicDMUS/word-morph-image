import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import {emulators} from "./emulators";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/functions";
import "firebase/functions";
import "firebase/database";
import App from "./App";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqfHHi_jK_cMEX0O_0dD8d6ymJPxVA9Jc",
    authDomain: "word-morph-image.firebaseapp.com",
    databaseURL: "https://word-morph-image-default-rtdb.firebaseio.com",
    projectId: "word-morph-image",
    storageBucket: "word-morph-image.appspot.com",
    messagingSenderId: "724904043135",
    appId: "1:724904043135:web:042be513e468382907154a",
    measurementId: "G-XTF50TCXHF",
};

firebase.initializeApp(firebaseConfig);

emulators();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
