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

    const [state, dispatch] = React.useReducer(reducer, {
        text: "",
        dictionary: {},
        isDarkMode: prefersDarkMode,
    });

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!!user) {
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
                        });
                    })
                    .catch(function (error) {
                        // Handle any errors here
                    });
            } else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .then(() => {
                        // Signed in..
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log("ERROR:", errorCode, ` ${errorMessage}`);
                    });
            }
        });
    }, []);

    const theme = React.useMemo(
        () =>
            prefersDarkMode
                ? createTheme({ ...darkTheme })
                : createTheme({ ...lightTheme }),
        [prefersDarkMode]
    );

    React.useEffect(() => {
        if (state.isDarkMode) {
            document.body.className = "scrollbars-dark";
        } else {
            document.body.className = "scrollbars-light";
        }
    }, [prefersDarkMode]);

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
