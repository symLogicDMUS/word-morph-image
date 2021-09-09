import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {ReactComponent as InfoOutlinedIcon} from "./info.svg";
import {useStyles} from "./HomeIconButton.jss";
import {motion} from "framer-motion";

function AboutIconButton() {
    const classes = useStyles();
    return (
        <motion.div className={classes.listItem} whileHover={{scale: 1.15}}>
            <IconButton>
                <InfoOutlinedIcon  fill={"#fff"}/>
            </IconButton>
            <Typography
                className={classes.iconButtonSubtitle}
                variant={"subtitle2"}
            >
                About
            </Typography>
        </motion.div>
    )
}


export default AboutIconButton;