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
import SignOutButton from "./SignOutButton";
import MenuIcon from "@material-ui/icons/Menu";
import RenderCode from "../../helpers/RenderCode";
import AppContext from "../../AppContext";
import { useStyles } from "./MyAppBar.jss";

export function MyAppBar({ handleDrawerToggle }) {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

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
                <RenderCode childName={"state.dictionary"} iconButton>
                    {state.dictionary}
                </RenderCode>
                <Tooltip title={"Toggle light/dark theme"}>
                    <IconButton
                        onClick={() =>
                            dispatch({
                                type: "update-mode",
                                isDarkMode: !state.isDarkMode,
                            })
                        }
                    >
                        {state.isDarkMode ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                </Tooltip>
                <SignOutButton />
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
