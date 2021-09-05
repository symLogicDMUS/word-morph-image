import React from "react";
import { Alert } from "@material-ui/lab";
import { Dialog } from "@material-ui/core";

function AlertDialog(props) {
    const { open, onBackdropClick, severity, children, ...other } = props;
    return (
        <Dialog open={open} onBackdropClick={onBackdropClick}>
            <Alert severity={severity} {...other}>
                {children}
            </Alert>
        </Dialog>
    );
}

export default AlertDialog;
