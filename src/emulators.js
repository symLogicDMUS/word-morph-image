import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/functions";

export function emulators() {
    firebase.auth().useEmulator("http://localhost:9099");
    firebase.storage().useEmulator("localhost", 9199);
    firebase.database().useEmulator("localhost", 9000);
    firebase.firestore().useEmulator("localhost", 8080);
    firebase.functions().useEmulator("localhost", 5001);
}
