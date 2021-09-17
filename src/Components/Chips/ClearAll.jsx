import React from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Box, InputAdornment, Tooltip } from "@mui/material";
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
