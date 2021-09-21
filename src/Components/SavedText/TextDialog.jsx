import "firebase/database";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import AppContext from "../../AppContext";
import { updateParagraphs } from "../../API/updateParagraphs";
import { Dialog } from "@mui/material";
import { TextField } from "@mui/material";
import { DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { useStyles } from "./TextDialog.jss";

function TextDialog(props) {
    const { title, text, open, onBackdropClick } = props;

    const { state, dispatch } = useContext(AppContext);

    const [paragraph, setParagraph] = useState(text);

    const handleChange = (e) => {
        setParagraph(e.target.value);
    };

    const handleClick = () => {
        updateParagraphs({ [title]: paragraph }).then((r) => {
            dispatch({
                type: "update-paragraphs",
                title: title,
                text: paragraph,
            });
        });
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
                <DialogContentText className={classes.text}>
                    <TextField
                        autoFocus
                        multiline
                        fullWidth
                        rows={200}
                        value={paragraph}
                        variant={"standard"}
                        onChange={handleChange}
                        className={classes.input}
                        InputProps={{ disableUnderline: true }}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    color={"primary"}
                    variant={"contained"}
                    onClick={handleClick}
                >
                    Save
                </Button>
                <Button onClick={onBackdropClick}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TextDialog;
