import "firebase/auth";
import React from "react";
import firebase from "firebase/app";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ReactComponent as AccountCircle } from "./account_circle.svg";
import { useStyles } from "./HomeIconButton.jss";

function HomeSignOutButton({ hidden }) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <motion.div
            className={classes.listItem}
            whileHover={{ scale: 1.15 }}
            onClick={() => firebase.auth().signOut()}
            style={hidden ? { display: "none" } : null}
        >
            <IconButton color={"primary"} size="large">
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
