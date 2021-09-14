import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import "firebase/auth";
import SignInPage from "./SignInPage";
import SignOutPage from "./SignOutPage";

function Home() {

    const [signedIn, setSignedIn] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!!user) {
                setSignedIn(true)
            } else {
                setSignedIn(false)
            }
        });
    }, []);

    return (
        <>
            {! signedIn ? (
                <SignInPage signedIn={signedIn} />
            ) : (
                <SignOutPage />
            )}
        </>
    );
}

export default Home;
