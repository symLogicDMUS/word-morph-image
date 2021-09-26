import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Hidden, IconButton, Tooltip } from "@mui/material";
import { Pause } from "@mui/icons-material";
import { useStyles } from "./ActionButton.jss";

export function PauseButton({ wordIndex, currentIndex }) {
    const history = useHistory();

    const classes = useStyles();

    const pause = () => {
        history.push("/pause", {
            wordIndex: wordIndex + currentIndex,
        });
    };

    return (
        <>
            <Hidden smDown>
                <Button
                    onClick={pause}
                    startIcon={<Pause />}
                    color="primary"
                    variant="contained"
                >
                    Pause
                </Button>
            </Hidden>
            <Hidden smUp>
                <Tooltip title={"Pause"} placement={"bottom"}>
                    <IconButton onClick={pause} color="secondary" size="large">
                        <Pause fontSize={"large"} />
                    </IconButton>
                </Tooltip>
            </Hidden>
        </>
    );
}
