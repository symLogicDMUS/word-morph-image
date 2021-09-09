import React from "react";
import {Box} from "@material-ui/core";
import YouTubeIconButton from "./YouTubeIconButton";
import GitHubIconButton from "./GitHubIconButton";
import AboutIconButton from "./AboutIconButton";
import {useStyles} from "./HomeIconButtons.jss";

function HomeIconButtons() {
    const classes = useStyles();
    return (
        <Box className={classes.homeIconButtons}>
            <YouTubeIconButton />
            <GitHubIconButton />
            <AboutIconButton />
        </Box>
    )
}

export default HomeIconButtons;