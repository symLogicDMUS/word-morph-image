import React from "react";
import { Backdrop, Paper } from "@mui/material";
import LinearValueWithLabel from "./LinearValueWithLabel";
import { useStyles } from "./LoadBar.jss";

function LoadBar({ open, progress }) {
    const classes = useStyles();
    return (
        <Backdrop open={open} className={classes.backdrop}>
            <Paper className={classes.paper}>
                <LinearValueWithLabel progress={progress} />
            </Paper>
        </Backdrop>
    );
}

export default LoadBar;
