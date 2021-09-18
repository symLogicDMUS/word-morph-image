import React, { useContext, useMemo } from "react";
import Box from "@mui/material/Box";
import AppContext from "../../AppContext";
import WordImagePair from "./WordImagePair";
import { useStyles } from "./SavedPairs.jss";

function SavedPairs() {
    const { state, dispatch } = useContext(AppContext);

    const pairs = useMemo(() => {
        const newPairs = {};
        Object.entries(state.dictionary)
            .sort()
            .forEach((arrPair) => {
                newPairs[arrPair[0]] = arrPair[1];
            });
        return newPairs;
    }, [state.numUpdates]);

    const classes = useStyles();

    return (
        <>
            <Box className={classes.pairs}>
                {Object.keys(pairs).map((word, index) => (
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

export default SavedPairs
