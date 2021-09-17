import React, {useContext, useState} from "react";
import AppContext from "../../AppContext";
import {updateParagraph} from "../../API/updateParagraph";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {Save} from "@material-ui/icons";
import {useStyles} from "./SaveTextButton.jss";

export function SaveTextButton() {
    const {state, dispatch} = useContext(AppContext)

    const [title, setTitle] = useState("");
    const handleChange = (e) => {
        setTitle(e.target.value)
    };

    const [saveDialog, setSaveDialog] = useState(false);

    const saveText = () => {
        updateParagraph({[title]: state.text}).then(r => {
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
                variant={"contained"}
                color={"primary"}
                disabled={!state.text}
                onClick={() => setSaveDialog(true)}
            >
                Save
            </Button>
            <Dialog open={saveDialog} onBackdropClick={() => setSaveDialog(false)}>
                <DialogTitle>
                    Enter Title:
                </DialogTitle>
                <DialogContent>
                    <TextField value={title} onChange={handleChange} variant={"filled"} fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button color={"primary"} variant={"contained"} onClick={saveText}>
                        Save
                    </Button>
                    <Button color={"primary"} onClick={() => setSaveDialog(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}