import React, {useState} from "react";
import { motion } from "framer-motion";
import {Button, Dialog, DialogActions, DialogTitle, useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ReactComponent as YouTube } from "./youtube.svg";
import { useStyles } from "./HomeIconButton.jss";

function YouTubeIconButton() {
    //TODO: create youtube video and button is link to video
    const classes = useStyles();
    const theme = useTheme();

    const [dialog, setDialog] = useState(false);



    return (
        <>
            <motion.div
                className={classes.listItem}
                whileHover={{ scale: 1.15 }}
                onClick={() => setDialog(true)
                    // (window.location.href =
                    //     "https://www.youtube.com/channel/UCltAA2bRVBpfrqWy-RbqY2w/videos")
                }
            >
                <IconButton size="large">
                    <YouTube fill="#fff" /> {/*fill='#f48fb1'*/}
                </IconButton>
                <Typography
                    variant={"subtitle2"}
                    style={{color: '#fff'}} /*color: '#f48fb1'*/
                    className={classes.iconButtonSubtitle}
                >
                    Watch demo
                </Typography>
            </motion.div>
            <Dialog open={dialog} onBackdropClick={() => setDialog(false)}>
                <DialogTitle>Coming Soon</DialogTitle>
                <DialogActions>
                    <Button onClick={() => setDialog(false)} fullWidth>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default YouTubeIconButton;
