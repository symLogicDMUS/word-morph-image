import React,
{useContext, useMemo, useState} from "react";
import Box from "@mui/material/Box";
import AppContext from "../../AppContext";
import WordImagePair from "./WordImagePair";
import { useStyles } from "./SavedPairs.jss";
import BottomBarWithSearch from "../Search/BottomBarWithSearch";

function SavedPairs() {
    const { state, dispatch } = useContext(AppContext);

    const getWordImagePairs = (words) => {
        words.sort()
        return words.map((word, index) => (
            <WordImagePair
                key={index}
                word={word}
                image={state.dictionary[word]}
            />
        ));
    };

    const [searchField, setSearchField] = useState("");
    const handleSearchInput = (e) => {
        setSearchField(e.target.value);
    };

    const wordImagePairs = useMemo(() => {
        if (!!searchField && searchField !== "") {
            const filteredWords = Object.keys(state.dictionary).filter(
                (title) =>
                    title.toLowerCase().startsWith(searchField.toLowerCase())
            );
            return getWordImagePairs(filteredWords);
        } else {
            return getWordImagePairs(Object.keys(state.dictionary));
        }
    }, [searchField, state.dictionary]);


    const classes = useStyles();

    return (
        <>
            <Box className={classes.pairs}>
                {wordImagePairs}
            </Box>
            <BottomBarWithSearch
                handleChange={handleSearchInput}
            />
        </>
    );
}

export default SavedPairs;
