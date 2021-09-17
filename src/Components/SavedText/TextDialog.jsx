import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

function TextDialog(props) {
    const { title, text, open, onBackdropClick } = props;

    return (
        <Dialog open={open} onBackdropClick={onBackdropClick}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant={"contained"} color={"primary"}>
                    Save
                </Button>
                <Button variant={"outlined"}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TextDialog;
