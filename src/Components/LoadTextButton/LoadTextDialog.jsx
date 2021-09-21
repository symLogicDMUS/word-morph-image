import React, { useContext, useMemo, useState } from "react";
import AppContext from "../../AppContext";
import Button from "@mui/material/Button";
import { Dialog, Paper, Stack } from "@mui/material";
import ModalTextCard from "../SavedText/ModalTextCard";
import { useStyles } from "./LoadTextDialog.jss";
import PrimarySearch from "../Search/PrimarySearch";

export function LoadTextDialog({ open, parseText, isDispatch, onClose }) {
    const { state, dispatch } = useContext(AppContext);

    const [card, setCard] = useState({
        text: "",
        selected: false,
    });
    const handleCardClick = (text, selected) => {
        setCard({
            text: text,
            selected: selected,
        });
    };

    const load = () => {
        if (isDispatch) {
            dispatch({ type: "update-text", text: card.text });
        } else if (!!parseText) {
            parseText(card.text);
        }
        onClose();
    };

    const classes = useStyles();

    const getTextCards = (titles) => {
        return titles.map((title, index) => (
            <ModalTextCard
                key={index}
                title={title}
                index={index + 1}
                selected={card.selected}
                onClick={() =>
                    handleCardClick(state.paragraphs[title], index + 1)
                }
            >
                {state.paragraphs[title]}
            </ModalTextCard>
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
        <Dialog fullScreen open={open} className={classes.dialog}>
            <Paper>
                <Stack p={1.5} direction="row" flexWrap="wrap">
                    {textCards}
                </Stack>
            </Paper>
            <Paper className={classes.bottomArea}>
                <Stack
                    p={1.5}
                    spacing={3}
                    direction="row"
                    justifyContent="flex-end"
                    className={classes.actionButtonsBar}
                >
                    <PrimarySearch handleChange={handleSearchInput} />
                    <Button
                        onClick={load}
                        color={"primary"}
                        variant={"contained"}
                        disabled={!card.selected}
                    >
                        Load
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </Stack>
            </Paper>
        </Dialog>
    );
}
