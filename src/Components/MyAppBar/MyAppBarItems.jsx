import React, {useContext} from "react";
import AppContext from "../../AppContext";
import SignOutButton from "./SignOutButton";
import {GitHub} from "@mui/icons-material";
import {IconButton, Tooltip} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import RenderCode from "../../helpers/RenderCode";

function MyAppBarItems(props) {
    const {handleDrawerToggle, ...other} = props;

    const { state, dispatch } = useContext(AppContext);

    return (
        <div {...other}>
            <RenderCode childName={"state"} iconButton>
                {state}
            </RenderCode>
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
                        <Brightness7Icon/>
                    ) : (
                        <Brightness4Icon/>
                    )}
                </IconButton>
            </Tooltip>
            <SignOutButton/>
            <Tooltip title="Author's GitHub">
                <IconButton
                    onClick={() =>
                        (window.location.href =
                            "https://github.com/symLogicDMUS/word-morph-image")
                    }
                    size="large"
                >
                    <GitHub/>
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default MyAppBarItems;