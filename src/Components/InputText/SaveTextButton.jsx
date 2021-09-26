import React, { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { updateParagraphs } from "../../API/updateParagraphs";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    useMediaQuery,
} from "@mui/material";
import { Save } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as CardsIcon } from "./cards.svg";
import { useTheme } from "@mui/material/styles";

export function SaveTextButton() {
    const { state, dispatch } = useContext(AppContext);

    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const [title, setTitle] = useState("");
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const [saveDialog, setSaveDialog] = useState(false);

    const saveText = () => {
        updateParagraphs({ [title]: state.text }).then((r) => {
            setSaveDialog(false);
            dispatch({
                type: "update-paragraphs",
                title: title,
                text: state.text,
            });
        });
    };

    const theme = useTheme();

    return (
        <>
            <Button
                startIcon={<Save />}
                color={"primary"}
                variant={"contained"}
                disabled={!state.text}
                onClick={() => setSaveDialog(true)}
                style={sm ? { display: "none" } : null}
            >
                Save
            </Button>
            <IconButton
                size="large"
                color="primary"
                disabled={!state.text}
                onClick={() => setSaveDialog(true)}
                style={!sm ? { display: "none" } : null}
            >
                <Save
                    fill={
                        !state.text
                            ? theme.palette.action.disabled
                            : theme.palette.primary.main
                    }
                />
            </IconButton>
            <Dialog
                open={saveDialog}
                onBackdropClick={() => setSaveDialog(false)}
            >
                <DialogTitle>Enter Title:</DialogTitle>
                <DialogContent>
                    <TextField
                        variant={"filled"}
                        value={title}
                        onChange={handleChange}
                        autoFocus
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        color={"primary"}
                        variant={"contained"}
                        onClick={saveText}
                    >
                        Save
                    </Button>
                    <Button onClick={() => setSaveDialog(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
