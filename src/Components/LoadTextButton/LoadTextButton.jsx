import { useState } from "react";
import Button from "@mui/material/Button";
import { LoadTextDialog } from "./LoadTextDialog";
import { StorageRounded } from "@mui/icons-material";
import { useStyles } from "./LoadTextButton.jss";

function LoadTextButton({ parseText, isDispatch= true}) {
    const [textDialog, setTextDialog] = useState(false);

    const classes = useStyles();

    return (
        <>
            <LoadTextDialog
                open={textDialog}
                parseText={parseText}
                isDispatch={isDispatch}
                onClose={() => setTextDialog(false)}
            />
            <Button
                onClick={() => setTextDialog(true)}
                startIcon={<StorageRounded />}
                className={classes.button}
                variant={"contained"}
            >
                Load
            </Button>
        </>
    );
}

export default LoadTextButton;
