import { useHistory } from "react-router-dom";
import { Button, Hidden, Tooltip } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import React from "react";

export function PlayButton({ currentIndex }) {
    const history = useHistory();

    const play = () => history.push("/morphs", { wordIndex: currentIndex });

    return (
        <>
            <Hidden smDown>
                <Button
                    onClick={play}
                    variant="contained"
                    startIcon={<PlayArrow />}
                >
                    Play
                </Button>
            </Hidden>
            <Hidden smUp>
                <Tooltip title={"Play"} placement={"bottom"}>
                    <IconButton onClick={play} color="secondary" size="large">
                        <PlayArrow fontSize={"large"} />
                    </IconButton>
                </Tooltip>
            </Hidden>
        </>
    );
}
