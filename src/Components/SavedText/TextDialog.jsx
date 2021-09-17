import React, {useContext, useState} from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, TextField, useTheme,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {updateParagraph} from "../../API/updateParagraph";
import {vh} from "../../helpers/windowMeasurements";
import AppContext from "../../AppContext";

// const theme = useTheme()
// const vhInRem = Number(theme.typography.pxToRem(vh()).match(/[0-9]+/g)[0]);

function TextDialog(props) {
    const { title, text, open, onBackdropClick } = props;

    const { state, dispatch } = useContext(AppContext);

    const [paragraph, setParagraph] = useState(text);

    const handleChange = (e) => {
        setParagraph(e.target.value)
    };

    const handleClick = () => {
        updateParagraph({[title]: paragraph}).then(r => {
            dispatch({
                type: "update-paragraphs",
                title: title,
                text: paragraph,
            })
        })
    };

    return (
        <Dialog open={open} onBackdropClick={onBackdropClick}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent maxHeight={400}>
                <TextField onChange={handleChange} value={paragraph} multiline rows={200} />
                {/*<DialogContentText>{text}</DialogContentText>*/}
            </DialogContent>
            <DialogActions>
                <Button variant={"contained"} color={"primary"} onClick={handleClick}>
                    Save
                </Button>
                <Button variant={"outlined"}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TextDialog;
