import React from "react";
import firebase from "firebase";
import Button from "@mui/material/Button";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

function SignInDialog({ open, onClose }) {
    return (
        <Dialog open={open} onBackdropClick={onClose}>
            <DialogTitle>Sign In</DialogTitle>
            <DialogContent>
                <StyledFirebaseAuth
                    uiConfig={{
                        signInFlow: "popup",
                        signInOptions: [
                            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                            firebase.auth.GithubAuthProvider.PROVIDER_ID,
                            firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        ],
                        callbacks: {
                            signInSuccess: () => {
                                onClose();
                                return false;
                            },
                        },
                    }}
                    firebaseAuth={firebase.auth()}
                />
            </DialogContent>
            <DialogActions>
                <Button fullWidth onClick={onClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SignInDialog;
