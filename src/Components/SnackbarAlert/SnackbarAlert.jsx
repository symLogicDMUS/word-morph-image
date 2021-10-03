import React, {useContext} from "react";
import {Alert, Button, Link, Snackbar, Stack, Typography} from "@mui/material";
import {CloseSignInAlert} from "./CloseSignInAlert";
import AlertTitle from "@mui/material/AlertTitle";
import SignInButton from "../Home/SignInButton";
import AppContext from "../../AppContext";

function SnackbarAlert(props) {
    const { state, dispatch } = useContext(AppContext);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch({ type: "close-alert" });
    };

    const getActionComponent = () => {
        switch (state.alert.action) {
            case "login":
                return (
                    <Stack
                        spacing={2}
                        direction="row"
                        // style={{marginTop: "auto"}}
                    >
                        <SignInButton/>
                        <Button color={"inherit"} size={"small"}>
                            <Link href="https://youtu.be/9lkwUOnjwUw">
                                Learn More
                            </Link>
                        </Button>
                        <CloseSignInAlert onClose={handleClose}/>
                    </Stack>
                );
            default:
                return null;
        }
    };

    return (
        <div {...props}>
            <Snackbar
                open={state.alert.open}
                onClose={handleClose}
                autoHideDuration={state.alert.autoHideDuration}
            >
                <Alert
                    onClose={handleClose}
                    severity={state.alert.severity}
                    action={getActionComponent(state.alert.action)}
                >
                    <AlertTitle>{state.alert.title}</AlertTitle>
                    {state.alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default SnackbarAlert;
