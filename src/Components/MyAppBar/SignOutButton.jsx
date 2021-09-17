import React from "react";
import { AccountCircle } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
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
                size="large">
                <AccountCircle />
            </IconButton>
        </Tooltip>
    );
}

export default SignOutButton;
