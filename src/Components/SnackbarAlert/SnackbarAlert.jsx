import React, {useContext} from "react";
import { Alert } from "@material-ui/lab";
import AppContext from "../../AppContext";
import { Snackbar } from "@material-ui/core";

function SnackbarAlert(props) {
    const {state, dispatch} = useContext(AppContext);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch({type: "close-alert"})
    };

    return (
        <div {...props}>
            <Snackbar open={state.alert.open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={state.alert.severity}>
                    {state.alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default SnackbarAlert;
