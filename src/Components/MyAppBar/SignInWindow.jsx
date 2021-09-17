import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { uiConfig } from "../../uiConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

function SignInWindow(props) {
    const { open, setOpen } = props;

    useEffect(() => {
        firebase.auth().onAuthStateChanged((r) => setOpen(false));
    }, []);

    return (
        <Dialog onBackdropClick={() => setOpen(false)} open={open}>
            <DialogTitle>Sign In</DialogTitle>
            <DialogContent></DialogContent>
        </Dialog>
    );
}

export default SignInWindow;
