import React from "react";
import Box from "@material-ui/core/Box";
import {useHistory} from "react-router-dom";
import {useStyles} from "./AppTitle.jss";

function AppTitle() {
    const history = useHistory();

    const classes = useStyles();

    return (
        <Box className={classes.container} onClick={() => history.push("/about")}>
            <img className={classes.title} src={"/Images/title.svg"} alt=""/>
        </Box>
    )
}

export default AppTitle;