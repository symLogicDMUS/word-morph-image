import React from "react";
import Button from "@material-ui/core/Button";
import { ReactComponent as LoremPicsum } from "./lorem_picsum.svg";
import { useStyles } from "./LoremPicsumButton.jss";
import { Typography } from "@material-ui/core";

function LoremPicsumButton(props) {
    const { setRandomImages, ...other } = props;

    const classes = useStyles();

    return (
        <Button
            color={"primary"}
            variant={"contained"}
            onClick={setRandomImages}
            className={classes.loremPicsum}
            {...other}
            startIcon={<LoremPicsum />}
        >
            <Typography variant={"button"} noWrap>
                Set all
            </Typography>
        </Button>
    );
}

export default LoremPicsumButton;
