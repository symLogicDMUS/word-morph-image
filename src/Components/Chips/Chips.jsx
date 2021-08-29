import React, { useState } from "react";
import ChipInput from "./ChipInput";
import { Box } from "@material-ui/core";
import TextFieldUnderline from "./TextFieldUnderline";
import RenderCodeOrOutput from "../../helpers/RenderCodeOrOutput";
import { useStyles } from "./Chips.jss";
import { AddPairs } from "./AddPairs";

function Chips(props) {
    const classes = useStyles();

    const [chips, setChips] = useState([]);
    const handleChange = (chips) => {
        console.log("chips", chips);
        setChips(chips);
    };

    const [isFocused, setIsFocused] = useState(false);
    const updateFocus = (value) => {
        setIsFocused(value);
    };

    const clearAll = (inputRef) => {
        inputRef.current.clear();
    };

    return (
        <Box className={classes.body}>
            <ChipInput
                fullWidth
                variant="filled"
                clearAll={clearAll}
                isFocused={isFocused}
                updateFocus={updateFocus}
                onChange={handleChange}
            />
            <TextFieldUnderline isFocused={isFocused} />
            <Box className={classes.actions}>
                <AddPairs chips={chips} />
            </Box>
            <RenderCodeOrOutput>{chips}</RenderCodeOrOutput>
        </Box>
    );
}

export default Chips;
