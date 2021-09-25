import { Fab } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";
import AddIcon from "@mui/icons-material/Add";
import firebase from "firebase/app";
import { getDir } from "../../helpers/getDir";
import { useStyles } from "./AddPairs.jss";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";

export function AddPairs({ pairs }) {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

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
                dispatch({
                    type: "update-dictionary",
                    newPairs: newPairs,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "new-alert",
                    alert: {
                        severity: "error",
                        message: `An Error occurred adding pairs: ${err}`,
                        open: true,
                    }
                });
                console.log("ERROR:", err);
            });
    };

    return (
        <Fab onClick={upload} color={"secondary"} className={classes.fabButton}>
            <AddIcon />
        </Fab>
    );
}
