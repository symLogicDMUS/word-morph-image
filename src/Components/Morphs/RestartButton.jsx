import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Hidden, Tooltip } from "@mui/material";
import { SkipPrevious } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
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
            <Hidden smDown>
                <Button variant="outlined" onClick={restart}>
                    <SkipPrevious fontSize={"small"} className={classes.icon} />{" "}
                    Restart
                </Button>
            </Hidden>
            <Hidden smUp>
                <Tooltip title={"Restart"} placement={"bottom"}>
                    <IconButton color={"primary"} size="large">
                        <SkipPrevious fontSize={"large"} />
                    </IconButton>
                </Tooltip>
            </Hidden>
        </>
    );
}
