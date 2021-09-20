import React from "react";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import { useStyles } from "./AppTitle.jss";

function AppTitle({ mode }) {
    const history = useHistory();

    const classes = useStyles();

    return (
        <Box
            className={classes.container}
            onClick={() => history.push("/about")}
        >
            <img
                className={classes.title}
                src={`/Images/title-${mode}.svg`}
                alt=""
            />
        </Box>
    );
}

export default AppTitle;
