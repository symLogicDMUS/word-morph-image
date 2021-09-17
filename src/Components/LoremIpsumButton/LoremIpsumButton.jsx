import React, { useContext } from "react";
import { Button } from "@mui/material";
import SubjectIcon from "@mui/icons-material/Subject";
import { useStyles } from "./LoremIpsumButton.jss";
import { LoremIpsum } from "lorem-ipsum";
import AppContext from "../../AppContext";

function LoremIpsumButton(props) {
    const { children, ...other } = props;
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4,
        },
        wordsPerSentence: {
            max: 16,
            min: 4,
        },
    });

    return (
        <Button
            className={classes.button}
            onClick={() =>
                dispatch({
                    type: "update-text",
                    text: lorem.generateParagraphs(3),
                })
            }
            {...other}
        >
            <SubjectIcon fontSize={"small"} className={classes.icon} />{" "}
            {children}
        </Button>
    );
}

export default LoremIpsumButton;
