import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Hidden, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useStyles } from "./ActionButton.jss";
import IconButton from "@mui/material/IconButton";

export function BackButton() {
    const history = useHistory();

    const classes = useStyles();

    const goBack = () => history.push("/");

    return (
        <>
            <Hidden smDown>
                <Button
                    onClick={goBack}
                    startIcon={<ArrowBackIcon />}
                    variant="outlined"
                >
                    Go Back
                </Button>
            </Hidden>
            <Hidden smUp>
                <Tooltip title={"Go back"} placement={"bottom"}>
                    <IconButton onClick={goBack} color={"primary"} size="large">
                        <ArrowBackIcon fontSize={"large"} />
                    </IconButton>
                </Tooltip>
            </Hidden>
        </>
    );
}
