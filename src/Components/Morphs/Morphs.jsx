import React, { useContext, useMemo, useState } from "react";
import "firebase/auth";
import "firebase/database";
import Morph from "./Morph";
import wordPattern from "../../regex/wordPattern";
import { Box, Stack, Typography } from "@mui/material";
import Morphed from "../Image/Morphed";
import { PauseButton } from "./PauseButton";
import { RestartButton } from "./RestartButton";
import { BackButton } from "./BackButton";
import AppContext from "../../AppContext";
import { useStyles } from "./Morphs.jss";
import PausePlayButton from "./PausePlayButton";
import {SkipPrevious} from "@mui/icons-material";

function Morphs(props) {
    const wordIndex = props.location.state.wordIndex;
    const { state, dispatch } = useContext(AppContext);
    const words = state.text.match(wordPattern);
    const morphs = words.slice(wordIndex);

    const prevMorphs = useMemo(() => {
        const morphs = [];
        for (let i = 0; i < wordIndex; i++) {
            morphs.push(
                <Morphed key={i} word={words[i]}>
                    {state.dictionary[words[i]]}
                </Morphed>
            );
        }
        return morphs;
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const incrementIndex = () => setCurrentIndex(currentIndex + 1);

    const classes = useStyles();

    return (
        <>
            <Box className={classes.body}>
                <Typography className={classes.morphs}>
                    {prevMorphs}
                    {morphs.map((word, index) => (
                        <Morph
                            key={index}
                            word={word}
                            index={index}
                            currentIndex={currentIndex}
                            incrementIndex={incrementIndex}
                        >
                            {state.dictionary[word]}
                        </Morph>
                    ))}
                </Typography>
                <Stack spacing={3} direction="row">
                    <PausePlayButton
                        page={"/morphs"}
                        numWords={morphs.length}
                        wordIndex={wordIndex}
                        currentIndex={currentIndex}
                    />
                    <RestartButton
                        wordIndex={wordIndex}
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

export default Morphs;
