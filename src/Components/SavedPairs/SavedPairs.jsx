import React, { useContext } from "react";
import WordImagePair from "./WordImagePair";
import { Box } from "@material-ui/core";
import AppContext from "../../AppContext";
import { useStyles } from "./SavedPairs.jss";

function SavedPairs() {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    return (
        <>
            <Box className={classes.pairs}>
                {Object.keys(state.dictionary).map((word, index) => (
                    <WordImagePair
                        key={index}
                        word={word}
                        image={state.dictionary[word]}
                    />
                ))}
            </Box>
        </>
    );
}

export default SavedPairs;
