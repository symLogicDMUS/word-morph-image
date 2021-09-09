import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import AppContext from "./AppContext";
import Chips from "./Components/Chips/Chips";
import darkTheme from "./theme/darkTheme.jss";
import lightTheme from "./theme/lightTheme.jss";
import Morphs from "./Components/Morphs/Morphs";
import { CssBaseline } from "@material-ui/core";
import { appDefaultState } from "./appDefaultState";
import TextInput from "./Components/TextInput/TextInput";
import PausedMorphs from "./Components/Morphs/PausedMorphs";
import WordImgCards from "./Components/ImgWordCard/WordImgCards";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
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
                        <Route exact path="/about" component={About} />
                        <Route exact path="/input" component={TextInput} />
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
