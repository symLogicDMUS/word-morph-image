import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import AppContext from "./AppContext";
import darkTheme from "./theme/darkTheme.jss";
import lightTheme from "./theme/lightTheme.jss";
import Morphs from "./Components/Morphs/Morphs";
import { createTheme } from "@mui/material/styles";
import { appDefaultState } from "./appDefaultState";
import Input from "./Components/InputText/InputText";
import PausedMorphs from "./Components/Morphs/PausedMorphs";
import WordImgCards from "./Components/ImgWordCard/WordImgCards";
import AddPairGroup from "./Components/AddPairGroup/AddPairGroup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import SnackbarAlert from "./Components/SnackbarAlert/SnackbarAlert";
import AddSinglePair from "./Components/AddSinglePair/AddSinglePair";
import SavedPairs from "./Components/SavedPairs/SavedPairs";
import { updateDictionary } from "./API/updateDictionary";
import SavedText from "./Components/SavedText/SavedText";
import { updateParagraphs } from "./API/updateParagraphs";
import Sources from "./Components/Sources/Sources";
import About from "./Components/About/About";
import { getDir } from "./helpers/getDir";
import { CssBaseline } from "@mui/material";
import "firebaseui/dist/firebaseui.css";
import { reducer } from "./App.red";
import "./App.scss";

function App() {
    const [state, dispatch] = useReducer(reducer, appDefaultState);

    const appContextValue = useMemo(
        () => ({ state, dispatch }),
        [state, dispatch]
    );

    const theme = useMemo(() => {
        if (state.isDarkMode) {
            document.body.className = "scrollbars-dark";
            document.documentElement.className = "scrollbars-dark";
            return createTheme(darkTheme);
        } else {
            document.body.className = "scrollbars-light";
            document.documentElement.className = "scrollbars-light";
            return createTheme(lightTheme);
        }
    }, [state.isDarkMode]);

    if (!firebase.auth().currentUser) {
        firebase
            .auth()
            .signInAnonymously()
            .then((r) => {
                dispatch({
                    type: "new-alert",
                    alert: {
                        open: true,
                        severity: "info",
                        title: "You aren't signed in",
                        message: "",
                        autoHideDuration: 10000,
                        action: "login",
                    },
                });
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!!user) {
                const dir = getDir(user);
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
                            const firstEntry = {
                                sample: "Images/material_design_logo.svg",
                            };
                            updateDictionary(firstEntry).then((r) => {
                                dispatch({
                                    type: "new-dictionary",
                                    dictionary: firstEntry,
                                });
                            });
                        }
                    });
                firebase
                    .database()
                    .ref(`/${dir}/paragraphs/${user.uid}`)
                    .once("value")
                    .then(function (snapshot) {
                        if (!!snapshot.val()) {
                            dispatch({
                                type: "new-paragraphs",
                                paragraphs: snapshot.val(),
                            });
                        } else {
                            const firstParagraph = {
                                First: "Hello word!",
                            };
                            updateParagraphs(firstParagraph).then((r) => {
                                dispatch({
                                    type: "new-paragraphs",
                                    paragraphs: firstParagraph,
                                });
                            });
                        }
                    });
            }
        });
    }, []);

    return (
        <AppContext.Provider value={appContextValue}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Input} />
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
                                        <AddPairGroup {...props} />
                                    </ResponsiveDrawer>
                                )}
                            />
                            <Route
                                exact
                                path="/add-single-pair"
                                component={(props) => (
                                    <ResponsiveDrawer>
                                        <AddSinglePair {...props} />
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
                            <Route
                                exact
                                path="/saved-pairs"
                                component={(props) => (
                                    <ResponsiveDrawer>
                                        <SavedPairs {...props} />
                                    </ResponsiveDrawer>
                                )}
                            />
                            <Route
                                exact
                                path="/saved-text"
                                component={(props) => (
                                    <ResponsiveDrawer>
                                        <SavedText {...props} />
                                    </ResponsiveDrawer>
                                )}
                            />
                            <Route
                                exact
                                path="/about"
                                component={(props) => (
                                    <ResponsiveDrawer>
                                        <About {...props} />
                                    </ResponsiveDrawer>
                                )}
                            />
                            <Route
                                exact
                                path="/sources"
                                component={(props) => (
                                    <ResponsiveDrawer>
                                        <Sources {...props} />
                                    </ResponsiveDrawer>
                                )}
                            />
                        </Switch>
                    </Router>
                    <SnackbarAlert />
                </ThemeProvider>
            </StyledEngineProvider>
        </AppContext.Provider>
    );
}

export default App;
