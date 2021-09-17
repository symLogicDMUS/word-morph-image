import React from "react";
import Button from "@mui/material/Button";
import BackspaceIcon from "@mui/icons-material/Backspace";
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
