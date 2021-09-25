import React, {useContext} from "react";
import { Tooltip } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import AppContext from "../../AppContext";
import firebase from "firebase/app";
import "firebase/auth";

function SignOutButton() {
    const history = useHistory();

    const {state, dispatch} = useContext(AppContext);

    return (
        <Tooltip title={"Sign Out"}>
            <IconButton
                onClick={() =>
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
                }
                size="large"
            >
                <AccountCircle />
            </IconButton>
        </Tooltip>
    );
}

export default SignOutButton;
