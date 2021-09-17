import React, {useContext} from "react";
import "firebase/auth";
import "firebase/database";
import TextCard from "./TextCard";
import Box from "@material-ui/core/Box";
import AppContext from "../../AppContext";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";
import {useStyles} from "./SavedText.jss";

function SavedText() {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    return (
        <>
            <Box className={classes.body}>
                {Object.keys(state.paragraphs).map((title, index) => (
                    <TextCard title={title} key={index}>
                        {state.paragraphs[title]}
                    </TextCard>
                ))}
            </Box>
            <SnackbarAlert />
        </>
    );
}

export default SavedText;
