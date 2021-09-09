import { Box, Fab } from "@material-ui/core";
import React, { useContext } from "react";
import AppContext from "../../AppContext";
import AddIcon from "@material-ui/icons/Add";
import firebase from "firebase/app";
import { getDir } from "../../helpers/getDir";
import RenderCode from "../../helpers/RenderCode";

/**
 * Add word image pairs to App's context
 */
export function AddPairs({ pairs }) {
    const { state, dispatch } = useContext(AppContext);

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
        <>
            <RenderCode
                file={"AddPairs.jsx"}
                childName={"dictionary"}
                iconButton
                style={{ marginRight: "1rem" }}
            >
                {state.dictionary}
            </RenderCode>
            <Fab color={"primary"} onClick={upload}>
                <AddIcon />
            </Fab>
        </>
    );
}
