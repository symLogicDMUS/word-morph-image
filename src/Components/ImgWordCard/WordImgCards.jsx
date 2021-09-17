import React, { useContext, useState } from "react";
import wordPattern from "../../regex/wordPattern";
import { AnimatePresence } from "framer-motion";
// import { useHistory } from "react-router-dom";
import { MyAppBar } from "../MyAppBar/MyAppBar";
import ImgWordCard from "./ImgWordCard";
import AppContext from "../../AppContext";

function WordImgCards(props) {
    // const history = useHistory();
    // const wordIndex = props.location.state.wordIndex;
    const { state, dispatch } = useContext(AppContext);
    const words = state.text.match(wordPattern);
    const numWords = words.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const incrementCurrentIndex = () =>
        setCurrentIndex((prevIndex) => prevIndex + 1);
    const resetIndex = () => setCurrentIndex(0);

    return (
        <>
            <MyAppBar />
            <AnimatePresence>
                {words.map((word, index) => (
                    <ImgWordCard
                        key={index}
                        index={index}
                        numWords={numWords}
                        currentIndex={currentIndex}
                        incrementCurrentIndex={incrementCurrentIndex}
                        resetIndex={resetIndex}
                    >
                        {word}
                    </ImgWordCard>
                ))}
            </AnimatePresence>
        </>
    );
}

export default WordImgCards;
