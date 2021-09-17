import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {getDir} from "../helpers/getDir";

export async function updateParagraph(paragraph) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const dir = getDir(user);
    return await firebase
        .database()
        .ref(`${dir}/paragraphs/${uid}`)
        .update(paragraph)
}