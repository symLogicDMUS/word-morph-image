import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ReactComponent as YouTube } from "./youtube.svg";
import { useStyles } from "./HomeIconButton.jss";

function YouTubeIconButton() {
    //TODO: create youtube video and button is link to video
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <motion.div
                className={classes.listItem}
                whileHover={{ scale: 1.15 }}
                onClick={() =>
                    window.location.href =
                        "https://youtu.be/0wN4SHmRHT4"
                }
            >
                <IconButton size="large">
                    <YouTube fill='#f48fb1' />
                </IconButton>
                <Typography
                    variant={"subtitle2"}
                    style={{color: '#f48fb1'}}
                    className={classes.iconButtonSubtitle}
                >
                    Watch demo
                </Typography>
            </motion.div>
        </>
    );
}

export default YouTubeIconButton;
