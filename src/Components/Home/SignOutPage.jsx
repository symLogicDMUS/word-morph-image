import React from "react";
import { Box } from "@mui/material";
import HomeIconButtons from "./HomeIconButtons";
import { ReactComponent as Title } from "./title.svg";
import { useStyles } from "./Home.jss";

function SignOutPage() {
    const classes = useStyles();

    return (
        <Box className={classes.body}>
            <Box className={classes.content}>
                <Title className={classes.title} />
                <HomeIconButtons />
            </Box>
        </Box>
    );
}

export default SignOutPage;
