import React, {useState} from "react";
import AppTitle from "./AppTitle";
import {useTheme} from "@mui/styles";
import MyAppBarItems from "./MyAppBarItems";
import {MoreHoriz, MoreVert, YouTube} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {AppBar, Button, IconButton, Menu, Toolbar, Tooltip, useMediaQuery} from "@mui/material";
import {useStyles} from "./MyAppBar.jss";

export function MyAppBar({ handleDrawerToggle }) {

    const classes = useStyles();

    const theme = useTheme();

    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
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
                    <MenuIcon/>
                </IconButton>
                <AppTitle mode={theme.palette.mode}/>
                <Tooltip title={"watch demo"}>
                    <IconButton
                        style={{color: "#f48fb1"}}
                        onClick={() =>
                            (window.location.href =
                                "https://youtu.be/9lkwUOnjwUw")
                        }
                    >
                        <YouTube
                            fontSize={"large"}
                            style={{color: "#f48fb1"}}
                        />
                    </IconButton>
                </Tooltip>
                <MyAppBarItems
                    handleDrawerToggle={handleDrawerToggle}
                    style={sm ? { display: "none" } : null}

                />
                <IconButton
                    onClick={handleMenuOpen}
                    style={! sm ? { display: "none" } : null}

                >
                    <MoreHoriz fontSize={"large"} />
                </IconButton>
                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                    style={! sm ? { display: "none" } : null}
                >
                    <MyAppBarItems handleDrawerToggle={handleDrawerToggle} />
                </Menu>
            </Toolbar>
        </AppBar>
        </>
    );
}
