import React, { useContext } from "react";
import { GitHub } from "@material-ui/icons";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import {
    AppBar,
    Tooltip,
    Toolbar,
    IconButton,
    Typography,
} from "@material-ui/core";
import SignInOutButton from "../../SignInOutButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./MyAppBar.jss";
import AppContext from "../../AppContext";

export function MyAppBar({ handleDrawerToggle }) {
    const classes = useStyles();

    // const { isDarkMode, setIsDarkMode } = useContext(ModeContext);
    const { state, dispatch } = useContext(AppContext);

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} noWrap>
                    Words to Images
                </Typography>
                {state.isDarkMode ? (
                    <Tooltip title={"Toggle light/dark theme"}>
                        <IconButton
                            onClick={() =>
                                dispatch({
                                    type: "update-mode",
                                    isDarkMode: false,
                                })
                            }
                        >
                            <Brightness7Icon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title={"Toggle light/dark theme"}>
                        <IconButton
                            onClick={() =>
                                dispatch({
                                    type: "update-mode",
                                    isDarkMode: true,
                                })
                            }
                        >
                            <Brightness4Icon />
                        </IconButton>
                    </Tooltip>
                )}
                <SignInOutButton />
                <Tooltip title="Author's GitHub">
                    <IconButton
                        onClick={() =>
                            (window.location.href =
                                "https://github.com/symLogicDMUS/word-morph-image")
                        }
                    >
                        <GitHub />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}
