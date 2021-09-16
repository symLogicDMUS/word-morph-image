import {Fab} from "@material-ui/core";
import React, {useContext} from "react";
import AppContext from "../../AppContext";
import AddIcon from "@material-ui/icons/Add";
import firebase from "firebase/app";
import {getDir} from "../../helpers/getDir";
import {useStyles} from "./AddPairs.jss";

export function AddPairs({ pairs }) {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    const upload = async () => {
        const newPairs = {};
        Object.values(pairs).forEach((pair) => {
            newPairs[pair.word] = pair.url;
        });
        dispatch({ type: "update-dictionary", newPairs: newPairs });

        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const dir = getDir(user);
        return await firebase
            .database()
            .ref(`${dir}/dictionary/${uid}`)
            .update(newPairs)
            .catch((err) => {
                console.log(`ERROR: ${err}`);
            });
    };

    return (
        <Fab
            onClick={upload}
            color={"secondary"}
            className={classes.fabButton}
        >
            <AddIcon />
        </Fab>
    );
}
