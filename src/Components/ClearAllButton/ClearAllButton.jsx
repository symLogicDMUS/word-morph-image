import React from "react";
import Button from "@mui/material/Button";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { IconButton, Tooltip, useMediaQuery } from "@mui/material";

function ClearAllButton({ clearAll }) {
    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <>
            <Button
                color={"primary"}
                onClick={clearAll}
                variant={"outlined"}
                startIcon={<BackspaceIcon />}
                style={sm ? { display: "none" } : null}
            >
                Clear
            </Button>
            <Tooltip
                title={"clear all"}
                style={!sm ? { display: "none" } : null}
            >
                <IconButton onClick={clearAll} color={"primary"} size={"large"}>
                    <BackspaceIcon />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default ClearAllButton;
