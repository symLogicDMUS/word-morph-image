import firebase from "firebase";
import "firebase/auth";

export const getTitle = () => {
    if (!!firebase.auth().currentUser) {
        if (firebase.auth().currentUser.isAnonymous) {
            return "Sign In (A)"
        } else {
            return "Sign Out"
        }
    }
    return "Sign In";
};