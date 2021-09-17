import React from "react";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as GitHub } from "./github.svg";
import Typography from "@mui/material/Typography";
import { useStyles } from "./HomeIconButton.jss";
import { motion } from "framer-motion";

function GitHubIconButton() {
    const classes = useStyles();
    return (
        <motion.div
            className={classes.listItem}
            whileHover={{ scale: 1.15 }}
            onClick={() =>
                (window.location.href =
                    "https://github.com/symLogicDMUS/word-morph-image")
            }
        >
            <IconButton size="large">
                <GitHub fill={"#fff"} />
            </IconButton>
            <Typography
                className={classes.iconButtonSubtitle}
                variant={"subtitle2"}
            >
                GitHub
            </Typography>
        </motion.div>
    );
}

export default GitHubIconButton;
