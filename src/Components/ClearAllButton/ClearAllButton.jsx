import React from "react";
import Button from "@material-ui/core/Button";
import BackspaceIcon from "@material-ui/icons/Backspace";
import { useStyles } from "./ClearAllButton.jss";

function ClearAllButton({ clearAll }) {
    const classes = useStyles();

    return (
        <Button
            color={"primary"}
            variant={"outlined"}
            startIcon={<BackspaceIcon />}
            className={classes.clearAllButton}
            onClick={clearAll}
        >
            Clear
        </Button>
    );
}

export default ClearAllButton;
