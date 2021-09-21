import React, { useContext, useMemo, useState } from "react";
import "firebase/auth";
import "firebase/database";
import TextCard from "./TextCard";
import Box from "@mui/material/Box";
import AppContext from "../../AppContext";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";
import BottomBarWithSearch from "../Search/BottomBarWithSearch";
import { useStyles } from "./SavedText.jss";

function SavedText() {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    const getTextCards = (titles) => {
        titles.sort();
        return titles.map((title, index) => (
            <TextCard title={title} key={index}>
                {state.paragraphs[title]}
            </TextCard>
        ));
    };

    const [searchField, setSearchField] = useState("");
    const handleSearchInput = (e) => {
        setSearchField(e.target.value);
    };

    const textCards = useMemo(() => {
        if (!!searchField && searchField !== "") {
            const filteredTitles = Object.keys(state.paragraphs).filter(
                (title) =>
                    title.toLowerCase().startsWith(searchField.toLowerCase())
            );
            return getTextCards(filteredTitles);
        } else {
            return getTextCards(Object.keys(state.paragraphs));
        }
    }, [searchField, state.paragraphs]);

    return (
        <>
            <Box className={classes.body}>{textCards}</Box>
            <BottomBarWithSearch handleChange={handleSearchInput} />
            <SnackbarAlert />
        </>
    );
}

export default SavedText;
