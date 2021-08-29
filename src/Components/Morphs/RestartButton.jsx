import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Hidden, Tooltip } from "@material-ui/core";
import { SkipPrevious } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./ActionButton.jss";

export function RestartButton({ wordIndex, currentIndex }) {
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
            <Hidden xsDown>
                <Button variant="outlined" onClick={restart}>
                    <SkipPrevious fontSize={"small"} className={classes.icon} /> Restart
                </Button>
            </Hidden>
            <Hidden smUp>
                <Tooltip title={"Restart"} placement={"bottom"}>
                    <IconButton color={"primary"}>
                        <SkipPrevious fontSize={"large"} />
                    </IconButton>
                </Tooltip>
            </Hidden>
        </>
    );
}
