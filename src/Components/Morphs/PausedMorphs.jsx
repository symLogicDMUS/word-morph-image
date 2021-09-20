import React, { useContext } from "react";
import Morphed from "../Image/Morphed";
import { useHistory } from "react-router-dom";
import { MyAppBar } from "../MyAppBar/MyAppBar";
import wordPattern from "../../regex/wordPattern";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PlayArrow, SkipPrevious } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import AppContext from "../../AppContext";
import { useStyles } from "./Morphs.jss";

function PausedMorphs(props) {
    const history = useHistory();

    if (props.location.state.restart) {
        history.push("/morphs", {
            wordIndex: 0,
        });
    }

    const currentIndex = props.location.state.wordIndex;

    const { state, dispatch } = useContext(AppContext);
    const words = state.text.match(wordPattern);
    const numWords = words.length;

    const classes = useStyles();

    const morphed = () => {
        const images = [];
        for (let i = 0; i <= currentIndex; i++) {
            images.push(
                <Morphed word={words[i]}>{state.dictionary[words[i]]}</Morphed>
            );
        }
        return images;
    };

    const notMorphed = () => {
        const wordComponents = [];
        for (let i = currentIndex + 1; i < numWords; i++) {
            wordComponents.push(
                <Typography className={classes.word}>
                    {words[i] + " "}
                </Typography>
            );
        }
        return wordComponents;
    };

    const restart = () =>
        history.push("/morphs", {
            wordIndex: 0,
        });

    const goBack = () => history.push("/");

    return (
        <>
            <MyAppBar />
            <Box className={classes.body}>
                <Typography className={classes.morphs}>
                    {morphed()}
                    {notMorphed()}
                </Typography>
                <Box className={classes.buttons}>
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.marginRight}
                        onClick={() =>
                            history.push("/morphs", {
                                wordIndex: currentIndex,
                            })
                        }
                    >
                        <PlayArrow
                            fontSize={"small"}
                            className={classes.icon}
                        />
                        Play
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={restart}
                        className={classes.marginRight}
                    >
                        <SkipPrevious
                            fontSize={"small"}
                            className={classes.icon}
                        />
                        Restart
                    </Button>
                    <Button
                        variant="outlined"
                        className={classes.marginRight}
                        onClick={goBack}
                    >
                        <ArrowBackIcon className={classes.icon} />
                        Go Back
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default PausedMorphs;
