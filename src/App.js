import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";
import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import AppContext from "./AppContext";
import Home from "./Components/Home/Home";
import Chips from "./Components/Chips/Chips";
import darkTheme from "./theme/darkTheme.jss";
import lightTheme from "./theme/lightTheme.jss";
import Morphs from "./Components/Morphs/Morphs";
import { CssBaseline } from "@material-ui/core";
import { appDefaultState } from "./appDefaultState";
import InputText from "./Components/InputText/InputText";
import PausedMorphs from "./Components/Morphs/PausedMorphs";
import WordImgCards from "./Components/ImgWordCard/WordImgCards";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";
import SavedPairs from "./Components/SavedPairs/SavedPairs";
import { updateDictionary } from "./API/updateDictionary";
import { getDir } from "./helpers/getDir";
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
            return createTheme({ ...darkTheme });
        } else {
            document.body.className = "scrollbars-light";
            return createTheme({ ...lightTheme });
        }
    }, [state.isDarkMode]);

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
                                sample: "/Images/material_design.svg",
                            };
                            updateDictionary(firstEntry).then((r) => {
                                dispatch({
                                    type: "new-dictionary",
                                    dictionary: firstEntry,
                                });
                            });
                        }
                    });
            }
        });
    }, []);

    return (
        <AppContext.Provider value={appContextValue}>
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
                        <Route
                            exact
                            path="/saved-pairs"
                            component={(props) => (
                                <ResponsiveDrawer>
                                    <SavedPairs {...props} />
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
