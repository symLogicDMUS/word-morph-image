import React, { useContext } from "react";
import Morphed from "../Image/Morphed";
import { useHistory } from "react-router-dom";
import { MyAppBar } from "../MyAppBar/MyAppBar";
import wordPattern from "../../regex/wordPattern";
import { Box, Stack, Typography } from "@mui/material";
import AppContext from "../../AppContext";
import { PlayButton } from "./PlayButton";
import { BackButton } from "./BackButton";
import { RestartButton } from "./RestartButton";
import { useStyles } from "./Morphs.jss";
import {SkipPrevious} from "@mui/icons-material";
import PausePlayButton from "./PausePlayButton";

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

    return (
        <>
            <MyAppBar />
            <Box className={classes.body}>
                <Typography className={classes.morphs}>
                    {morphed()}
                    {notMorphed()}
                </Typography>
                <Stack spacing={3} direction="row">
                    <PausePlayButton
                        page={"/pause"}
                        numWords={numWords}
                        wordIndex={currentIndex}
                        currentIndex={currentIndex}
                    />
                    <RestartButton
                        wordIndex={currentIndex}
                        currentIndex={currentIndex}
                        startIcon={<SkipPrevious />}
                        variant={"outlined"}
                    >
                        Restart
                    </RestartButton>
                    <BackButton />
                </Stack>
            </Box>
        </>
    );
}

export default PausedMorphs;
