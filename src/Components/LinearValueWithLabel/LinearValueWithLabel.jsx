import React from "react";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import { useStyles } from "./LinearProgressWithLabel.jss";

function LinearValueWithLabel({progress}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel value={progress} />
        </div>
    );
}

export default LinearValueWithLabel;