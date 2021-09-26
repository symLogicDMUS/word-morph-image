import React, { useState } from "react";
import Button from "@mui/material/Button";
import { LoadTextDialog } from "./LoadTextDialog";
import { StorageRounded } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as CardsIcon } from "../InputText/cards.svg";

function LoadTextButton({ parseText, isDispatch = true }) {
    const [textDialog, setTextDialog] = useState(false);

    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const theme = useTheme();

    return (
        <>
            <LoadTextDialog
                open={textDialog}
                parseText={parseText}
                isDispatch={isDispatch}
                onClose={() => setTextDialog(false)}
            />
            <Button
                variant="contained"
                startIcon={<StorageRounded />}
                onClick={() => setTextDialog(true)}
                style={sm ? { display: "none" } : null}
            >
                Load
            </Button>
            <IconButton
                size={"large"}
                onClick={() => setTextDialog(true)}
                style={!sm ? { display: "none" } : null}
            >
                <StorageRounded color={"primary"} />
            </IconButton>
        </>
    );
}

export default LoadTextButton;
