import React, {useContext} from "react";
import AppContext from "../../AppContext";
import { containsInvalidCharacters }
       from "../../helpers/containsInvalidCharacters";
import {getTextWidth} from "../../helpers/getTextWidth";
import { useStyles } from "./ChipTextField.jss";

export function ChipTextField(props) {
    const { value, index, updateChipAtIndex, refocusParent, ...other } = props;

    const { state, dispatch } = useContext(AppContext);

    const handleChange = (e) => {
        if (e.key === "Enter") {
            refocusParent();
        } else {
            if (containsInvalidCharacters(e.target.value)) {
                dispatch({
                    type: "new-alert",
                    severity: "warning",
                    message: "cannot add word with these characters: # $ [ ] . ",
                    open: true,
                });
            } else {
                updateChipAtIndex(index, e.target.value);
            }
        }
    };

    const classes = useStyles();

    return (
        <input
            value={value}
            onChange={handleChange}
            className={classes.input}
            style={{
                height: 'auto',
                fontFamily: 'Roboto',
                width: getTextWidth(value),
            }}
            {...other}
        />
    );
}
