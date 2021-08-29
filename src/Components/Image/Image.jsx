import React, { useMemo } from "react";
import { useStyles } from "../Morphs/Morph.jss";
import dictionary from "../../dictionary";
import { useTheme } from "@material-ui/core";

function Image({ word, children }) {
    const classes = useStyles({ word: word });
    const theme = useTheme();

    const src = useMemo(() => {
        if (!!dictionary[children]) return dictionary[children];

        if (theme.palette.type === "dark")
            return "/word_images/alt/alt-dark.svg";

        if (theme.palette.type === "light")
            return "/word_images/alt/alt-light.svg";
    }, [theme.palette.type]);

    return <img src={src} className={classes.img} alt={word} />;
}

export default Image;
