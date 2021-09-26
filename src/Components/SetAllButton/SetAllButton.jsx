import React from "react";
import Button from "@mui/material/Button";
import { ReactComponent as LoremPicsum } from "./lorem_picsum.svg";
// import { useStyles } from "./SetAllButton.jss.";
import { useTheme } from "@mui/styles";
import {Typography, useMediaQuery} from "@mui/material";
import IconButton from "@mui/material/IconButton";

function SetAllButton(props) {
    const { setRandomImages, ...other } = props;

    const theme = useTheme();

    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <>
            <Button
                color={"primary"}
                variant={"contained"}
                onClick={setRandomImages}
                startIcon={
                    <LoremPicsum fill={theme.palette.primary.contrastText} />
                }
                style={sm ? { display: "none" } : null}
                {...other}
            >
                <Typography variant={"button"} noWrap>
                    Set all
                </Typography>
            </Button>
            <IconButton
                size={"large"}
                color={"primary"}
                onClick={setRandomImages}
                // className={classes.loremPicsum}
                style={! sm ? { display: "none" } : null}
                {...other}
            >
                <LoremPicsum fill={theme.palette.primary.main} />
            </IconButton>
        </>
    );
}

export default SetAllButton;
