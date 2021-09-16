import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./HighlightedWord.jss";

function HighlightedWord({ children, incrementIndex }) {
    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
        }, 750);
        return () => clearInterval(interval);
    }, []);

    if (seconds === 0) {
        incrementIndex();
    }

    const classes = useStyles();

    return (
        <Typography className={classes.word} color={"secondary"}>
            {children + " "}
        </Typography>
    );
}

export default HighlightedWord;
