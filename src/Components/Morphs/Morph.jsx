import React, { useMemo, useState } from "react";
import { Badge } from "@mui/material";
import variants from "./variants";
import { motion } from "framer-motion";
import HighlightedWord from "./HighlightedWord";
import Typography from "@mui/material/Typography";
import { transition } from "./transition";
import { useStyles } from "./Morph.jss";

function Morph(props) {
    const { index, currentIndex, incrementIndex, word, children } = props;

    const src = !!children ? children : null

    const [badge, setBadge] = useState(false);
    const toggleBadge = () => setBadge((prevState) => !prevState);

    const classes = useStyles();

    return (
        <>
            {index > currentIndex && (
                <Typography className={classes.word}>{word + " "}</Typography>
            )}
            {index === currentIndex && !!src && (
                <>
                    <motion.img
                        src={src}
                        alt={word}
                        key={index}
                        initial="initial"
                        animate="animate"
                        variants={variants}
                        transition={transition}
                        onAnimationComplete={incrementIndex}
                        className={classes.img}
                    />
                    <Badge
                        color="secondary"
                        badgeContent={word}
                        className={classes.badge}
                    />
                </>
            )}
            {index === currentIndex && !src && (
                <HighlightedWord incrementIndex={incrementIndex}>
                    {word + " "}
                </HighlightedWord>
            )}
            {index < currentIndex && !!src && (
                <>
                    <img
                        src={src}
                        alt={word}
                        className={classes.img}
                        onClick={toggleBadge}
                    />
                    {badge && (
                        <Badge
                            color="secondary"
                            badgeContent={word}
                            className={classes.badge}
                        />
                    )}
                </>
            )}
            {index < currentIndex && !src && (
                <Typography className={classes.word}>{word + " "}</Typography>
            )}
        </>
    );
}

export default Morph;
