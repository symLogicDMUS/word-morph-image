import React from "react";
import { Hidden, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useStyles } from "./VistitorDataAlertBar.jss";

function VisitorDataAlertBar() {
    const classes = useStyles();
    return (
        <Tooltip
            title={
                "*Recommend for employers and 1 time visitors. Visitor data deleted every 24 hours."
            }
        >
            <Typography className={classes.alertBar} noWrap>
                *Recommend for employers and 1 time visitors.{" "}
                <Hidden smDown>Visitor data deleted every 24 hours.</Hidden>
            </Typography>
        </Tooltip>
    );
}

export default VisitorDataAlertBar;
