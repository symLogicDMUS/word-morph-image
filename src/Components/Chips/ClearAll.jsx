import React from "react";
import BackspaceIcon from "@material-ui/icons/Backspace";
import { Box, InputAdornment, Tooltip } from "@material-ui/core";
import { useStyles } from "./ClearAll.jss";

export function ClearAll({ clearAll }) {
    const classes = useStyles();
    return (
        <InputAdornment position="start">
            <Box className={classes.iconContainer} onClick={clearAll}>
                <Tooltip title={"clear all"} placement={"left-middle"}>
                    <BackspaceIcon className={classes.icon} />
                </Tooltip>
            </Box>
        </InputAdornment>
    );
}
