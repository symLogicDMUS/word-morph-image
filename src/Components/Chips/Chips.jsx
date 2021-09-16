import React, { useState } from "react";
import ChipInput from "./ChipInput";
import { Box } from "@material-ui/core";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";
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
            <SnackbarAlert
                open={alert.open}
                onClose={closeAlert}
                severity={alert.severity}
            >
                {alert.message}
            </SnackbarAlert>
        </>
    );
}

export default Chips;
