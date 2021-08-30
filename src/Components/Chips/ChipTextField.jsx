import React from "react";
import { keyCodes } from "./keyCodes";
import { Typography } from "@material-ui/core";
import { useStyles } from "./ChipTextField.jss";

export function ChipTextField(props) {
    const { defaultValue, index, updateChipAtIndex, updatePair, refocusParent, ...other } =
        props;

    const classes = useStyles();

    const handleChange = (e) => {
        updateChipAtIndex(index, e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.keyCode == keyCodes.ENTER) {
            refocusParent();
        }
    };

    return (
        <span
            contentEditable
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className={classes.span}
            {...other}
        >
            <Typography>{props.defaultValue}</Typography>
        </span>
    );
}
