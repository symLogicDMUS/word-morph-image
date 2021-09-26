import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Hidden, Tooltip } from "@mui/material";
import { SkipPrevious } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useStyles } from "./ActionButton.jss";

export function RestartButton({ wordIndex, currentIndex, startIcon, variant, children }) {
    const history = useHistory();

    const classes = useStyles();

    const restart = () => {
        history.push("/pause", {
            wordIndex: wordIndex + currentIndex,
            restart: true,
        });
    };

    return (
        <>
            <Hidden smDown>
                <Button
                    onClick={restart}
                    variant={variant}
                    startIcon={startIcon}
                >
                    {children}
                </Button>
            </Hidden>
            <Hidden smUp>
                <Tooltip title={"Restart"} placement={"bottom"}>
                    <IconButton onClick={restart} color="primary" size="large">
                        {startIcon}
                    </IconButton>
                </Tooltip>
            </Hidden>
        </>
    );
}
