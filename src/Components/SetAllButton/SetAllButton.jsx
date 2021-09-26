import React from "react";
import { useTheme } from "@mui/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Tooltip, Typography, useMediaQuery } from "@mui/material";
import { ReactComponent as LoremPicsum } from "./lorem_picsum.svg";

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
            <Tooltip
                title={"set all (give image to every word)"}
                style={!sm ? { display: "none" } : null}
            >
                <IconButton
                    size={"large"}
                    color={"primary"}
                    onClick={setRandomImages}
                    {...other}
                >
                    <LoremPicsum fill={theme.palette.primary.main} />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default SetAllButton;
