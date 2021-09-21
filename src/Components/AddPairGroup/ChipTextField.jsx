import React, {useContext} from "react";
import AppContext from "../../AppContext";
import { containsInvalidCharacters }
       from "../../helpers/containsInvalidCharacters";
import { useStyles } from "./ChipTextField.jss";

export function ChipTextField(props) {
    const { value, index, updateChipAtIndex, refocusParent, ...other } = props;

    const { state, dispatch } = useContext(AppContext);

    const handleChange = (e) => {
        if (e.key === "Enter") {
            refocusParent();
        } else {
            if (containsInvalidCharacters(e.target.innerHTML)) {
                dispatch({
                    type: "new-alert",
                    severity: "warning",
                    message: "cannot add word with these characters: # $ [ ] . ",
                    open: true,
                });
            } else {
                updateChipAtIndex(index, e.target.innerHTML);
            }
        }
    };

    const classes = useStyles();

    return (
        <span
            contentEditable={true}
            className={classes.span}
            onKeyPress={handleChange}
            {...other}
        >
            {value}
        </span>
    );
}
