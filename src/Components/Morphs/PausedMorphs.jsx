import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import wordPattern from "../../regex/wordPattern";
import dictionary from "../../dictionary";
import { Box, Button, Typography } from "@material-ui/core";
import Word from "../Word/Word";
import Image from "../Image/Image";
import { useStyles } from "./Morphs.jss";
import { MyAppBar } from "../MyAppBar/MyAppBar";
import { PlayArrow, SkipPrevious } from "@material-ui/icons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppContext from "../../AppContext";

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
            images.push(<Image word={words[i]}>{dictionary[words[i]]}</Image>);
        }
        return images;
    };

    const notMorphed = () => {
        const wordComponents = [];
        for (let i = currentIndex + 1; i < numWords; i++) {
            wordComponents.push(<Word>{words[i]}</Word>);
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
