import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { AccountCircle } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import SignInWindow from "./Components/SignInWindow";
import { Tooltip } from "@material-ui/core";

function SignInOutButton() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (!!firebase.auth().currentUser) {
            firebase.auth().signOut();
        } else {
            setOpen(true);
        }
    };

    const getTitle = () => {
        // if (!!firebase.auth().currentUser) {
        if (firebase.auth().currentUser.isAnonymous) return "Sign In";
        else return "Sign Out";
        // }
    };

    return (
        <>
            <SignInWindow open={open} setOpen={setOpen} />
            <Tooltip title={getTitle}>
                <IconButton onClick={handleClick}>
                    <AccountCircle />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default SignInOutButton;
