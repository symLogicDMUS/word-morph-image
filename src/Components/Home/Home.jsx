import React, {useContext, useEffect} from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HomeIconButtons from "./HomeIconButtons";
import { ReactComponent as Title } from "./title.svg";
import VisitorSignInButton from "./VisitorSignInButton";
import {updateDictionary} from "../../API/updateDictionary";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import AppContext from "../../AppContext";
import { useStyles } from "./Home.jss";

function Home() {
    const history = useHistory();

    const {state, dispatch} = useContext(AppContext);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!!user) {
                const dir = user.isAnonymous ? "visitors" : "users";
                firebase
                    .database()
                    .ref(`/${dir}/dictionary/${user.uid}`)
                    .once("value")
                    .then(function (snapshot) {
                        if (!!snapshot.val()) {
                            dispatch({
                                type: "new-dictionary",
                                dictionary: snapshot.val(),
                            });
                        } else {
                            const firstEntry = {sample: "/Images/sample.svg"}
                            updateDictionary(firstEntry).then(r => {
                                dispatch({
                                    type: "new-dictionary",
                                    dictionary: firstEntry,
                                });
                            })
                        }
                    });
                history.push("/input");
            }
        });
    }, []);

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
                            signInSuccess: () => false,
                        },
                    }}
                    firebaseAuth={firebase.auth()}
                />
            </Box>
        </Box>
    );
}

export default Home;
