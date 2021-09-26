import React from "react";
import { PlayButton } from "./PlayButton";
import { PauseButton } from "./PauseButton";
import { RestartButton } from "./RestartButton";
import { PlayArrow } from "@mui/icons-material";

function PausePlayButton(props) {
    const { wordIndex, currentIndex, numWords, page } = props;

    const getButton = () => {
        if (currentIndex === numWords) {
            return (
                <RestartButton
                    wordIndex={wordIndex}
                    currentIndex={currentIndex}
                    startIcon={<PlayArrow />}
                    variant={"contained"}
                >
                    Play
                </RestartButton>
            );
        }
        if (page === "/pause") {
            return (
                <PlayButton
                    currentIndex={currentIndex}
                />
            );
        }
        return <PauseButton
            wordIndex={wordIndex}
            currentIndex={currentIndex}
        />;
    };

    return <>{getButton()}</>;
}

export default PausePlayButton;
