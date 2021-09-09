import React from "react";
import { AccountCircle } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Tooltip } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

function SignOutButton() {
    const history = useHistory();

    return (
        <Tooltip title={"Sign Out"}>
            <IconButton
                onClick={() =>
                    firebase
                        .auth()
                        .signOut()
                        .then((r) => history.push("/"))
                }
            >
                <AccountCircle />
            </IconButton>
        </Tooltip>
    );
}

export default SignOutButton;
