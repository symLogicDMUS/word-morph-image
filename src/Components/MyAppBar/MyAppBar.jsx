import React, { useContext } from "react";
import AppTitle from "./AppTitle";
import { useTheme } from "@mui/styles";
import { GitHub } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AppBar, IconButton, Toolbar, Tooltip } from "@mui/material";
import SignOutButton from "./SignOutButton";
import AppContext from "../../AppContext";
import { useStyles } from "./MyAppBar.jss";

export function MyAppBar({ handleDrawerToggle }) {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    const theme = useTheme();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                    size="large"
                >
                    <MenuIcon />
                </IconButton>
                <AppTitle mode={theme.palette.mode} />
                <Tooltip title={"Toggle light/dark theme"}>
                    <IconButton
                        onClick={() =>
                            dispatch({
                                type: "update-mode",
                                isDarkMode: !state.isDarkMode,
                            })
                        }
                        size="large"
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
                        size="large"
                    >
                        <GitHub />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}
