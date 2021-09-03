import {Box, Fab} from "@material-ui/core";
import React, { useContext } from "react";
import AppContext from "../../AppContext";
import AddIcon from "@material-ui/icons/Add";
import firebase from "firebase/app";
import {getDir} from "../../helpers/getDir";
import RenderCodeOrOutput from "../../helpers/RenderCodeOrOutput";

/**
 * Add word image pairs to App's context
 */
export function AddPairs({ pairs }) {
    const { state, dispatch } = useContext(AppContext);

    const dictionary = {};
    const upload = async () => {
        // const dictionary = {};
        Object.values(pairs).forEach(pair => {
            dictionary[pair.word] = pair.url
        })
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const dir = getDir(user);
        return await firebase.database().ref(`${dir}/dictionary/${uid}`).update(dictionary)
            .catch((err) => {
                console.log(`ERROR: ${err}`)
            })
    }

    return (
        <>
            <RenderCodeOrOutput file={"AddPairs.jsx"} nameOfChild={"dictionary"} iconButton style={{marginRight: '1rem'}}>
                {dictionary}
            </RenderCodeOrOutput>
            <Fab color={"primary"} onClick={upload}>
                <AddIcon />
            </Fab>
        </>

    );
}
