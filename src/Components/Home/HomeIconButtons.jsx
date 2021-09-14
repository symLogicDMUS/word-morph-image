import React from "react";
import "firebase/auth";
import firebase from "firebase/app";
import { Box } from "@material-ui/core";
import YouTubeIconButton from "./YouTubeIconButton";
import GitHubIconButton from "./GitHubIconButton";
import AboutIconButton from "./AboutIconButton";
import HomeSignOutButton from "./HomeSignOutButton";
import { useStyles } from "./HomeIconButtons.jss";

function HomeIconButtons() {
    const classes = useStyles();
    const hidden = ! firebase.auth().currentUser;
    return (
        <Box className={classes.homeIconButtons}>
            <YouTubeIconButton />
            <HomeSignOutButton
                hidden={hidden} />
            <GitHubIconButton />
            <AboutIconButton />
        </Box>
    );
}

export default HomeIconButtons;