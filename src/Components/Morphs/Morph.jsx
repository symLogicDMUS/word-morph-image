import React, { useContext, useMemo, useState } from "react";
import { motion } from "framer-motion";
import AppContext from "../../AppContext";
import totalDuration from "./totalDuration";
import { Badge, useTheme } from "@material-ui/core";
import HighlightedWord from "./HighlightedWord";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Morph.jss";

function Morph(props) {
    const { index, currentIndex, incrementIndex, children } = props;

    const { state, dispatch } = useContext(AppContext);

    const theme = useTheme();

    const classes = useStyles({ word: children });

    const src = useMemo(() => {
        if (!!state.dictionary[children]) {
            return state.dictionary[children];
        } else {
            return null;
        }
    }, [theme.palette.type]);

    const variants = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
        },
    };

    const [badge, setBadge] = useState(false);
    const toggleBadge = () => setBadge((prevState) => !prevState);

    return (
        <>
            {index > currentIndex && (
                <Typography className={classes.word}>
                    {children + " "}
                </Typography>
            )}
            {index === currentIndex && !!src && (
                <>
                    <motion.img
                        src={src}
                        initial="initial"
                        animate="animate"
                        variants={variants}
                        transition={{ duration: totalDuration }}
                        onAnimationComplete={incrementIndex}
                        className={classes.img}
                    />
                    <Badge
                        badgeContent={children}
                        color="secondary"
                        className={classes.badge}
                    />
                </>
            )}
            {index === currentIndex && !src && (
                <HighlightedWord incrementIndex={incrementIndex}>
                    {children + " "}
                </HighlightedWord>
            )}
            {index < currentIndex && !!src && (
                <>
                    <img
                        src={src}
                        className={classes.img}
                        alt={children}
                        onClick={toggleBadge}
                    />
                    {badge && (
                        <Badge
                            badgeContent={children}
                            color="secondary"
                            className={classes.badge}
                        />
                    )}
                </>
            )}
            {index < currentIndex && !src && (
                <Typography className={classes.word}>
                    {children + " "}
                </Typography>
            )}
        </>
    );
}

export default Morph;
