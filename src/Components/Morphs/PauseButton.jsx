import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Hidden, IconButton, Tooltip } from "@material-ui/core";
import { Pause } from "@material-ui/icons";
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
            <Hidden xsDown>
                <Button color="primary" variant="contained" onClick={pause}>
                    <Pause fontSize={"small"} className={classes.icon} /> Pause
                </Button>
            </Hidden>
            <Hidden smUp>
                <Tooltip title={"Pause"} placement={"bottom"}>
                    <IconButton color="secondary">
                        <Pause fontSize={"large"} />
                    </IconButton>
                </Tooltip>
            </Hidden>
        </>
    );
}
