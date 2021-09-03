import "firebase/auth";
import React from "react";
import firebase from "firebase/app";
import AppContext from "./AppContext";
import Home from "./Components/Home/Home";
import Chips from "./Components/Chips/Chips";
import darkTheme from "./theme/darkTheme.jss";
import lightTheme from "./theme/lightTheme.jss";
import Morphs from "./Components/Morphs/Morphs";
import { CssBaseline } from "@material-ui/core";
import { appDefaultState } from "./appDefaultState";
import PausedMorphs from "./Components/Morphs/PausedMorphs";
import WordImgCards from "./Components/ImgWordCard/WordImgCards";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";
import { reducer } from "./App.red";
import "./App.scss";

function App() {
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const [state, dispatch] = React.useReducer(
        reducer,
        prefersDarkMode,
        appDefaultState
    );

    const theme = React.useMemo(
        () =>
            state.isDarkMode
                ? createTheme({ ...darkTheme })
                : createTheme({ ...lightTheme }),
        [state.isDarkMode]
    );

    React.useEffect(() => {
        if (state.isDarkMode) {
            document.body.className = "scrollbars-dark";
        } else {
            document.body.className = "scrollbars-light";
        }
    }, [state.isDarkMode]);

    const user = firebase.auth().currentUser;
    React.useEffect(() => {
        //If no user, sign user in anonymously:
        if (!user) {
            firebase
                .auth()
                .signInAnonymously()
                .then(() => {
                    console.log("ID:", firebase.auth().currentUser);
                    console.log(
                        "Is anonymous:",
                        firebase.auth().currentUser.isAnonymous
                    );
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("ERROR:", errorCode, " " + errorMessage);
                });
        }
    }, [user]);

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!!user) {
                console.log("ID after state change:", user);
                const uid = user.uid;
                const storageRef = firebase
                    .storage()
                    .ref(`/users/images/${uid}`);
                storageRef
                    .listAll()
                    .then(function (result) {
                        result.items.forEach(async function (imageRef) {
                            const image = await imageRef.getDownloadURL();
                            const metadata = await imageRef.getMetadata();
                            console.log("image:", image, "metadata:", metadata);
                            // dispatch({action: "udpate-dictionary", dictionary:  })
                        });
                    })
                    .catch(function (error) {
                        // Handle any errors here
                    });
            }
        });
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/morphs"
                            component={(props) => (
                                <ResponsiveDrawer>
                                    <Morphs {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                        <Route
                            exact
                            path="/cards"
                            component={(props) => (
                                <ResponsiveDrawer>
                                    <WordImgCards {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                        <Route
                            exact
                            path="/chips"
                            component={(props) => (
                                <ResponsiveDrawer>
                                    <Chips {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                        <Route
                            exact
                            path="/pause"
                            component={(props) => (
                                <ResponsiveDrawer>
                                    <PausedMorphs {...props} />
                                </ResponsiveDrawer>
                            )}
                        />
                    </Switch>
                </Router>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
