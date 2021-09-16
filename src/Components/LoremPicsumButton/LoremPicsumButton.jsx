import React from "react";
import Button from "@material-ui/core/Button";
import {ReactComponent as LoremPicsum} from "./lorem_picsum.svg";
import { useStyles } from "./LoremPicsumButton.jss";

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
            Lorem Picsum
        </Button>
    );
}

export default LoremPicsumButton;
