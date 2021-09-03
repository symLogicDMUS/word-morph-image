import React, { useReducer, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Box } from "@material-ui/core";
import TextFieldUnderline from "./TextFieldUnderline";
import RenderCodeOrOutput from "../../helpers/RenderCodeOrOutput";
import ChipInput from "./ChipInput";
import { AddPairs } from "./AddPairs";
import { reducer } from "./Chips.red";
import { useStyles } from "./Chips.jss";

function Chips(props) {
    const [state, dispatch] = useReducer(reducer, {});

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

    const updatePair = (key, newItem, isUrl) => {
        dispatch({
            type: "update-pair",
            key: key,
            newItem: newItem,
            isUrl: isUrl,
        });
    };

    const removePair = (key) => {
        dispatch({ type: "remove-pair", key: key });
    };

    return (
        <Box className={classes.body}>
            <ChipInput
                fullWidth
                variant="filled"
                clearAll={clearAll}
                isFocused={isFocused}
                updateFocus={updateFocus}
                updatePair={updatePair}
                removePair={removePair}
                onChange={handleChange}
            />
            <TextFieldUnderline isFocused={isFocused} />
            <Box className={classes.actions}>
                <RenderCodeOrOutput iconButton style={{marginRight: '1rem'}}>
                    {chips}
                    {state}
                    {firebase.auth().currentUser.isAnonymous}
                </RenderCodeOrOutput>
                <AddPairs chips={chips} />
            </Box>
        </Box>
    );
}

export default Chips;
