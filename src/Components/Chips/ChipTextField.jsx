import React, { useState } from "react";
import { containsInvalidCharacters } from "../../helpers/containsInvalidCharacters";
import SnackbarAlert from "../SnackbarAlert/SnackbarAlert";

export function ChipTextField(props) {
    const { value, index, updateChipAtIndex, refocusParent, ...other } = props;

    const [alert, setAlert] = useState({
        severity: "",
        message: "",
        open: false,
    });

    const handleChange = (e) => {
        if (containsInvalidCharacters(e.target.value)) {
            setAlert({
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

    const closeAlert = () => {
        setAlert({
            severity: "",
            message: "",
            open: false,
        });
    };

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                size={value.length > 0 ? value.length : 1}
                className="MuiInputBase-input MuiInput-input"
                {...other}
            />
            <SnackbarAlert
                open={alert.open}
                severity={alert.severity}
                onClose={closeAlert}
            >
                {alert.message}
            </SnackbarAlert>
        </>
    );
}
