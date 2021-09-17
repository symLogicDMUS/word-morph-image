import React, { useContext, useMemo, useState } from "react";
import wordPattern from "../../regex/wordPattern";
import { Box, Typography } from "@material-ui/core";
import Morph from "./Morph";
import Morphed from "../Image/Morphed";
import { PauseButton } from "./PauseButton";
import { RestartButton } from "./RestartButton";
import { BackButton } from "./BackButton";
import AppContext from "../../AppContext";
import { useStyles } from "./Morphs.jss";

function Morphs(props) {
    const wordIndex = props.location.state.wordIndex;
    const { state, dispatch } = useContext(AppContext);
    const words = state.text.match(wordPattern);
    const morphs = words.slice(wordIndex);

    const prevMorphs = useMemo(() => {
        const morphs = [];
        for (let i = 0; i < wordIndex; i++) {
            morphs.push(<Morphed>{words[i]}</Morphed>);
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
                            index={index}
                            currentIndex={currentIndex}
                            incrementIndex={incrementIndex}
                        >
                            {word}
                        </Morph>
                    ))}
                </Typography>
                <Box className={classes.buttons}>
                    <PauseButton
                        wordIndex={wordIndex}
                        currentIndex={currentIndex}
                    />
                    <RestartButton
                        wordIndex={wordIndex}
                        currentIndex={currentIndex}
                    />
                    <BackButton />
                </Box>
            </Box>
        </>
    );
}

export default Morphs;
