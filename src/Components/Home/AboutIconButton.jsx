import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as InfoOutlinedIcon } from "./info.svg";
import { useStyles } from "./HomeIconButton.jss";
import AboutDialog from "./AboutDialog";

function AboutIconButton() {
    const [aboutDialog, setAboutDialog] = useState(false);

    const classes = useStyles();
    return <>
        <motion.div
            className={classes.listItem}
            whileHover={{ scale: 1.15 }}
            onClick={() => setAboutDialog(true)}
        >
            <IconButton size="large">
                <InfoOutlinedIcon fill={"#fff"} />
            </IconButton>
            <Typography
                className={classes.iconButtonSubtitle}
                variant={"subtitle2"}
            >
                About
            </Typography>
        </motion.div>
        <AboutDialog open={aboutDialog} setAboutDialog={setAboutDialog} />
    </>;
}

export default AboutIconButton;
