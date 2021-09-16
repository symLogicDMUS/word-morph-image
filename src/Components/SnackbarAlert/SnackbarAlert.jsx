import React from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

function SnackbarAlert(props) {
    const { open, onClose, severity, callback, children, ...other } = props;

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        if (!!callback) {
            callback()
        }

        onClose();
    };

    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} {...other}>
                {children}
            </Alert>
        </Snackbar>
    );
}

export default SnackbarAlert;
