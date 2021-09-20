import React, { useContext } from "react";
import ChipInput from "./ChipInput";
import { Box } from "@mui/material";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";
import { useStyles } from "./AddPairGroup.jss";
import AppContext from "../../AppContext";

function AddPairGroup(props) {
    const { state, dispatch } = useContext(AppContext);

    const newAlert = (severity, message, open) =>
        dispatch({
            type: "new-alert",
            severity: severity,
            message: message,
            open: open,
        });

    const classes = useStyles();

    return (
        <>
            <Box className={classes.body}>
                <ChipInput fullWidth variant="filled" newAlert={newAlert} />
            </Box>
            <SnackbarAlert />
        </>
    );
}

export default AddPairGroup;
