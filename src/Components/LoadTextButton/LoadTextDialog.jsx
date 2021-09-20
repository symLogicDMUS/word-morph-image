import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import Button from "@mui/material/Button";
import { Dialog, Paper, Stack } from "@mui/material";
import ModalTextCard from "../SavedText/ModalTextCard";
import { useStyles } from "./LoadTextDialog.jss";

export function LoadTextDialog({ open, onClose, callback }) {
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
        dispatch({ type: "update-text", text: card.text });
        onClose();
        if (!!callback) {
            callback();
        }
    };

    const classes = useStyles();

    return (
        <Dialog fullScreen open={open} className={classes.dialog}>
            <Paper>
                <Stack p={1.5} direction="row" flexWrap="wrap">
                    {Object.keys(state.paragraphs).map((title, index) => (
                        <ModalTextCard
                            key={index}
                            title={title}
                            index={index + 1}
                            selected={card.selected}
                            onClick={() =>
                                handleCardClick(
                                    state.paragraphs[title],
                                    index + 1
                                )
                            }
                        >
                            {state.paragraphs[title]}
                        </ModalTextCard>
                    ))}
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
