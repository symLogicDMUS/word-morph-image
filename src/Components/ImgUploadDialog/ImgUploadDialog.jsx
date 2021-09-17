import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Step,
    StepLabel,
    Stepper,
} from "@mui/material";
import { useStyles } from "./ImgUploadDialog.jss";

function ImgUploadDialog({ open }) {
    const classes = useStyles();

    return (
        <Dialog open={open}>
            <DialogTitle>Add Word/Image Pair</DialogTitle>
            <DialogContent>
                <Stepper>
                    <Step>
                        <StepLabel>Enter Word</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Upload Image</StepLabel>
                    </Step>
                </Stepper>
            </DialogContent>
        </Dialog>
    );
}

export default ImgUploadDialog;
