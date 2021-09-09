import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as YouTube } from "./youtube.svg";
import { useStyles } from "./HomeIconButton.jss";

function YouTubeIconButton() {
    //TODO: create youtube video and button is link to video
    const classes = useStyles();
    const theme = useTheme();
    return (
        <motion.div
            className={classes.listItem}
            whileHover={{ scale: 1.15 }}
            onClick={() =>
                (window.location.href =
                    "https://www.youtube.com/channel/UCltAA2bRVBpfrqWy-RbqY2w/videos")
            }
        >
            <IconButton>
                <YouTube fill={theme.palette.secondary.main} />
            </IconButton>
            <Typography
                className={classes.iconButtonSubtitle}
                variant={"subtitle2"}
                color={"secondary"}
            >
                Watch demo
            </Typography>
        </motion.div>
    );
}

export default YouTubeIconButton;
