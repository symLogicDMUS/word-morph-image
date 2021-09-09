import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { getDir } from "../helpers/getDir";

export async function updateDictionary(dictionary) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const dir = getDir(user);
    return await firebase
        .database()
        .ref(`/${dir}/dictionary/${uid}`)
        .update(dictionary);
}
