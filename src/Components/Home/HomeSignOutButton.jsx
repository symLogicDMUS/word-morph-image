import "firebase/auth";
import React from "react";
import firebase from "firebase/app";
import { motion } from "framer-motion";
import {useTheme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as AccountCircle } from "./account_circle.svg";
import { useStyles } from "./HomeIconButton.jss";

function HomeSignOutButton({hidden}) {
    const classes = useStyles();
    const theme = useTheme()
    return (
        <motion.div
            className={classes.listItem}
            whileHover={{ scale: 1.15 }}
            onClick={() =>
                firebase.auth().signOut()
            }
            style={hidden ? {display: "none"} : null}
        >
            <IconButton color={"primary"}>
                <AccountCircle fill={theme.palette.primary.main} />
            </IconButton>
            <Typography
                color="primary"
                variant="subtitle2"
                className={classes.iconButtonSubtitle}
            >
                Sign Out
            </Typography>
        </motion.div>
    );
}

export default HomeSignOutButton;
