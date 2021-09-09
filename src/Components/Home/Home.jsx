import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HomeIconButtons from "./HomeIconButtons";
import { ReactComponent as Title } from "./title.svg";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useStyles } from "./Home.jss";
import VisitorSignInButton from "./VisitorSignInButton";

function Home() {
    const history = useHistory();

    const classes = useStyles();

    return (
        <Box className={classes.body}>
            <Box className={classes.content}>
                <Title className={classes.title} />
                <HomeIconButtons />
                <VisitorSignInButton />
                <StyledFirebaseAuth
                    uiConfig={{
                        signInFlow: "popup",
                        signInOptions: [
                            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                            firebase.auth.GithubAuthProvider.PROVIDER_ID,
                            firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        ],
                        callbacks: {
                            signInSuccess: () => history.push("/input"),
                        },
                    }}
                    firebaseAuth={firebase.auth()}
                />
            </Box>
        </Box>
    );
}

export default Home;
