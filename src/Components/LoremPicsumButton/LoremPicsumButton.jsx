import React from "react";
import { useStyles } from "./LoremPicsumButton.jss";
import Button from "@material-ui/core/Button";

function LoremPicsumButton(props) {

    const {setRandomImages, ...other} = props;

    const classes = useStyles();

    return (
        <Button
            color={"primary"}
            variant={"contained"}
            onClick={setRandomImages}
            {...other}
        >
            Lorem Picsum
        </Button>
    )
}

export default LoremPicsumButton;