import {useMediaQuery} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import Button from "@mui/material/Button";
import React from "react";

export function CloseSignInAlert({onClose}) {
    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <>
            {sm ? (
                <IconButton size={"small"} onClick={onClose}>
                    <Close fontSize={"small"}/>
                </IconButton>
            ) : (
                <Button
                    size="small"
                    color="inherit"
                    onClick={onClose}
                >
                    Close
                </Button>
            )}
        </>
    );
}