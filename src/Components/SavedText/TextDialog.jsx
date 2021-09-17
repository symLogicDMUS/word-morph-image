import React, {useContext, useState} from "react";
import "firebase/database";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField,} from "@material-ui/core";
import AppContext from "../../AppContext";
import Button from "@material-ui/core/Button";
import {updateParagraphs} from "../../API/updateParagraphs";
import {useStyles} from "./TextDialog.jss";

function TextDialog(props) {
    const { title, text, open, onBackdropClick } = props;

    const { state, dispatch } = useContext(AppContext);

    const [paragraph, setParagraph] = useState(text);

    const handleChange = (e) => {
        setParagraph(e.target.value)
    };

    const handleClick = () => {
        updateParagraphs({[title]: paragraph}).then(r => {
            dispatch({
                type: "update-paragraphs",
                title: title,
                text: paragraph,
            })
        })
    };

    const classes = useStyles();

    return (
        <Dialog
            fullWidth
            open={open}
            maxWidth={"lg"}
            onBackdropClick={onBackdropClick}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField
                        autoFocus
                        multiline
                        fullWidth
                        rows={200}
                        value={paragraph}
                        onChange={handleChange}
                        className={classes.input}
                        InputProps={{disableUnderline: true}}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant={"contained"} color={"primary"} onClick={handleClick}>
                    Save
                </Button>
                <Button onClick={onBackdropClick}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default TextDialog;
