import React, {useContext, useState} from "react";
import { Tooltip } from "@mui/material";
import SignInDialog from "../Home/SignInDialog";
import { AccountCircle } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import AppContext from "../../AppContext";
import firebase from "firebase/app";
import "firebase/auth";


function SignOutButton() {
    const {state, dispatch} = useContext(AppContext);

    const isAccountUser = (!!firebase.auth().currentUser && ! firebase.auth().currentUser.isAnonymous)

    const [dialog, setDialog] = useState(false);

    return (
        <>
            <Tooltip title={isAccountUser ? "Sign Out" : "Sign In"}>
                <IconButton
                    onClick={() => isAccountUser ?
                        firebase
                            .auth()
                            .signOut()
                            .then((r) => {
                                dispatch({
                                    type: "new-alert",
                                    alert: {
                                        open: true,
                                        severity: "success",
                                        message: "signed out successfully!",
                                    }
                                })
                            })
                        : setDialog(true)
                    }
                    size="large"
                >
                    <AccountCircle />
                </IconButton>
            </Tooltip>
            <SignInDialog open={dialog} onClose={() => setDialog(false)} />
        </>
    );
}

export default SignOutButton;
