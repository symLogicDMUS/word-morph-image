import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Hidden, Tooltip } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./ActionButton.jss";
import IconButton from "@material-ui/core/IconButton";

export function BackButton() {
    const history = useHistory();

    const classes = useStyles();

    const goBack = () => history.push("/");

    return (
        <>
            <Hidden xsDown>
                <Button onClick={goBack} variant="outlined">
                    <ArrowBackIcon
                        fontSize={"small"}
                        className={classes.icon}
                    />{" "}
                    Go Back
                </Button>
            </Hidden>
            <Hidden smUp>
                <Tooltip title={"Go back"} placement={"bottom"}>
                    <IconButton color={"primary"}>
                        <ArrowBackIcon fontSize={"large"} />
                    </IconButton>
                </Tooltip>
            </Hidden>
        </>
    );
}
