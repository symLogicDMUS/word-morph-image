import React, { useState } from "react";
import AlertDialog from "../AlertDialog/AlertDialog";
import { Box } from "@material-ui/core";
import ChipInput from "./ChipInput";
import { useStyles } from "./Chips.jss";

function Chips(props) {
    const [alert, setAlert] = useState({
        severity: "",
        message: "",
        open: false,
    });

    const newAlert = (severity, message, open) => {
        setAlert({
            severity: severity,
            message: message,
            open: open,
        });
    };

    const closeAlert = () =>
        setAlert({ severity: "", message: "", open: false });

    const classes = useStyles();

    return (
        <>
            <Box className={classes.body}>
                <ChipInput fullWidth variant="filled" newAlert={newAlert} />
            </Box>
            <AlertDialog
                open={alert.open}
                onBackdropClick={closeAlert}
                severity={alert.severity}
            >
                {alert.message}
            </AlertDialog>
        </>
    );
}

export default Chips;
