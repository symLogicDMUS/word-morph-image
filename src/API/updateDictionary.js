import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

export async function updateDictionary(dictionary) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const dir = user.isAnonymous ? "visitors" : "users";
    return await firebase.database().ref(`/${dir}/dictionary/${uid}`).update(dictionary)
}