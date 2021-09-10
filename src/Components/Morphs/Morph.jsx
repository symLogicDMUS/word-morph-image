import React, { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import totalDuration from "./totalDuration";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Morph.jss";
import { useTheme } from "@material-ui/core";
import AppContext from "../../AppContext";

function Morph(props) {
    const { index, currentIndex, incrementIndex, children } = props;

    const { state, dispatch } = useContext(AppContext);

    const theme = useTheme();

    const classes = useStyles({ word: children });

    const src = useMemo(() => {
        if (!!state.dictionary[children]) return state.dictionary[children];

        if (theme.palette.type === "dark") return "/Images/alt/alt-dark.svg";

        if (theme.palette.type === "light") return "/Images/alt/alt-light.svg";
    }, [theme.palette.type]);

    const variants = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
        },
    };

    let color;
    if (index === currentIndex + 1) color = "secondary"
    else color = "inherit"

    return (
        <>
            {index > currentIndex && (
                <Typography className={classes.word} color={color}>
                    {children + " "}
                </Typography>
            )}
            {index <= currentIndex && !src && (
                <Typography className={classes.word} color={color}>
                    {children + " "}
                </Typography>
            )}
            {index <= currentIndex && !!src && (
                <motion.img
                    src={src}
                    initial="initial"
                    animate="animate"
                    variants={variants}
                    transition={{ duration: totalDuration }}
                    onAnimationComplete={incrementIndex}
                    className={classes.img}
                />
            )}
        </>
    );
}

export default Morph;
