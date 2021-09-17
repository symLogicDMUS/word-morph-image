import React, {useContext} from "react";
import AppContext from "../../AppContext";
import { containsInvalidCharacters } from "../../helpers/containsInvalidCharacters";

export function ChipTextField(props) {
    const { value, index, updateChipAtIndex, refocusParent, ...other } = props;

    const {state, dispatch} = useContext(AppContext)

    const handleChange = (e) => {
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
            {...other}
        />
    );
}
