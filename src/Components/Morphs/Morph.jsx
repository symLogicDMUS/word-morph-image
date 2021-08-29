import React, { useMemo } from "react";
import { motion } from "framer-motion";
import dictionary from "../../dictionary";
import totalDuration from "./totalDuration";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Morph.jss";
import { useTheme } from "@material-ui/core";

function Morph(props) {
    const { index, currentIndex, incrementIndex, children } = props;

    const theme = useTheme();

    const classes = useStyles({ word: children });

    const src = useMemo(() => {
        if (!!dictionary[children]) return dictionary[children];

        if (theme.palette.type === "dark")
            return "/Images/alt/alt-dark.svg";

        if (theme.palette.type === "light")
            return "/Images/alt/alt-light.svg";

    }, [theme.palette.type]);

    const variants = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
        },
    };

    return (
        <>
            {index > currentIndex && (
                <Typography className={classes.word}>
                    {children + " "}
                </Typography>
            )}
            {index <= currentIndex && (
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
