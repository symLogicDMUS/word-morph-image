import { Fab } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";
import AddIcon from "@material-ui/icons/Add";
import firebase from "firebase/app";
import { getDir } from "../../helpers/getDir";
import { useStyles } from "./AddPairs.jss";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";

export function AddPairs({ pairs }) {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    const [alert, setAlert] = useState({
        severity: "",
        message: "",
        open: false,
        callback: null,
    });

    const upload = () => {
        const newPairs = {};
        Object.values(pairs).forEach((pair) => {
            newPairs[pair.word] = pair.url;
        });

        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const dir = getDir(user);
        firebase
            .database()
            .ref(`${dir}/dictionary/${uid}`)
            .update(newPairs)
            .then((r) => {
                setAlert({
                    open: true,
                    severity: "success",
                    message: "New pairs added successfully!",
                    callback: () =>
                        dispatch({
                            type: "update-dictionary",
                            newPairs: newPairs,
                        }),
                });
            })
            .catch((err) => {
                console.log("ERROR:", err);
                setAlert({
                    open: true,
                    severity: "error",
                    message: `Error adding new pairs: ${err}`,
                    callback: () =>
                        dispatch({
                            type: "update-dictionary",
                            newPairs: newPairs,
                        }),
                });
            });
    };

    return (
        <>
            <Fab
                onClick={upload}
                color={"secondary"}
                className={classes.fabButton}
            >
                <AddIcon />
            </Fab>
            <SnackbarAlert
                open={alert.open}
                severity={alert.severity}
                callback={alert.callback}
                onClose={() =>
                    setAlert({
                        severity: "",
                        message: "",
                        open: false,
                        callback: null,
                    })
                }
            >
                {alert.message}
            </SnackbarAlert>
        </>
    );
}
