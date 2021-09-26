import React from "react";
import Button from "@mui/material/Button";
import BackspaceIcon from "@mui/icons-material/Backspace";
// import { useStyles } from "./ClearAllButton.jss";
import {IconButton, useMediaQuery} from "@mui/material";

function ClearAllButton({ clearAll }) {
    // const classes = useStyles();

    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <>
            <Button
                color={"primary"}
                onClick={clearAll}
                variant={"outlined"}
                startIcon={<BackspaceIcon />}
                // className={classes.clearAllButton}
                style={sm ? { display: "none" } : null}
            >
                Clear
            </Button>
            <IconButton
                onClick={clearAll}
                color={"primary"}
                size={"large"}
                // className={classes.clearAllButton}
                style={! sm ? { display: "none" } : null}
            >
                <BackspaceIcon />
            </IconButton>
        </>
    );
}

export default ClearAllButton;
