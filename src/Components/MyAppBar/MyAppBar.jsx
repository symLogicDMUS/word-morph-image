import React, { useContext } from "react";
import AppTitle from "./AppTitle";
import { useTheme } from "@mui/styles";
import { GitHub, YouTube } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AppBar, Icon, IconButton, Toolbar, Tooltip } from "@mui/material";
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
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                    size="large"
                >
                    <MenuIcon />
                </IconButton>
                <AppTitle mode={theme.palette.mode} />
                <Tooltip title={"watch demo"}>
                    <IconButton
                        style={{ color: "#f48fb1" }}
                        onClick={() =>
                            (window.location.href =
                                "https://youtu.be/9lkwUOnjwUw")
                        }
                    >
                        <YouTube
                            fontSize={"large"}
                            style={{ color: "#f48fb1" }}
                        />
                    </IconButton>
                </Tooltip>
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
