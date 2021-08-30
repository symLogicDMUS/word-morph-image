import React, {useReducer, useState} from "react";
import ChipInput from "./ChipInput";
import {Box, useForkRef} from "@material-ui/core";
import TextFieldUnderline from "./TextFieldUnderline";
import RenderCodeOrOutput from "../../helpers/RenderCodeOrOutput";
import firebase from "firebase/app";
import "firebase/auth";
import {AddPairs} from "./AddPairs";
import {useStyles} from "./Chips.jss";
import {reducer} from "./Chips.red";

function Chips(props) {

    const [state, dispatch] = useReducer(reducer, {})

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
        dispatch({type: "update-pair", key: key, newItem: newItem, isUrl: isUrl})
    };

    const removePair = (key) => {
        dispatch({type: "remove-pair", key: key})
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
                <AddPairs chips={chips} />
            </Box>
            <RenderCodeOrOutput>
                {chips}
                {state}
                {firebase.auth().currentUser.isAnonymous}
            </RenderCodeOrOutput>
        </Box>
    );
}

export default Chips;
