import React from "react";
import Button from "@mui/material/Button";
import { ReactComponent as LoremPicsum } from "./lorem_picsum.svg";
import { useStyles } from "./LoremPicsumButton.jss";
import { useTheme } from "@mui/styles";
import { Typography } from "@mui/material";

function LoremPicsumButton(props) {
    const { setRandomImages, ...other } = props;

    const classes = useStyles();

    const theme = useTheme();

    return (
        <Button
            color={"primary"}
            variant={"contained"}
            onClick={setRandomImages}
            className={classes.loremPicsum}
            {...other}
            startIcon={
                <LoremPicsum fill={theme.palette.primary.contrastText} />
            }
        >
            <Typography variant={"button"} noWrap>
                Set all
            </Typography>
        </Button>
    );
}

export default LoremPicsumButton;
