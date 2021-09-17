import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import TextCard from "./TextCard";
import AppContext from "../../AppContext";

export const useStyles = makeStyles(
    (theme) => ({
        body: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
                margin: theme.spacing(3),
            },
        },
    }),
    { index: 1 }
);

function SavedText() {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    return (
        <Box className={classes.body}>
            {Object.keys(state.paragraphs).map((title, index) => (
                <TextCard title={title} key={index}>
                    {state.paragraphs[title]}
                </TextCard>
            ))}
        </Box>
    );
}

export default SavedText;
