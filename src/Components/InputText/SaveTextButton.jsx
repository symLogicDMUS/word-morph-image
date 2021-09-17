import React, {useContext, useState} from "react";
import AppContext from "../../AppContext";
import {updateParagraphs} from "../../API/updateParagraphs";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Save} from "@mui/icons-material";
import {useStyles} from "./SaveTextButton.jss";

export function SaveTextButton() {
    const {state, dispatch} = useContext(AppContext)

    const [title, setTitle] = useState("");
    const handleChange = (e) => {
        setTitle(e.target.value)
    };

    const [saveDialog, setSaveDialog] = useState(false);

    const saveText = () => {
        updateParagraphs({[title]: state.text}).then(r => {
            setSaveDialog(false)
            dispatch({
                type: "update-paragraphs",
                title: title,
                text: state.text,
            })
        })
    };

    const classes = useStyles();

    return (
        <>
            <Button
                startIcon={<Save/>}
                color={"primary"}
                variant={"contained"}
                disabled={!state.text}
                className={classes.button}
                onClick={() => setSaveDialog(true)}
            >
                Save
            </Button>
            <Dialog open={saveDialog} onBackdropClick={() => setSaveDialog(false)}>
                <DialogTitle>
                    Enter Title:
                </DialogTitle>
                <DialogContent>
                    <TextField variant={"filled"} value={title} onChange={handleChange} autoFocus fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button color={"primary"} variant={"contained"} onClick={saveText}>
                        Save
                    </Button>
                    <Button onClick={() => setSaveDialog(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}