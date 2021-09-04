import React from "react";
import { useStyles } from "./ChipTextField.jss";

export function ChipTextField(props) {
    const { value, index, updateChipAtIndex, refocusParent, ...other } =
        props;

    const classes = useStyles();

    const handleChange = (e) => {
        updateChipAtIndex(index, e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            refocusParent();
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            size={value.length > 0 ? value.length : 1}
            className="MuiInputBase-input MuiInput-input"
        />
    );
}
