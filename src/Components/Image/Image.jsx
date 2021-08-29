import React, { useMemo } from "react";
import { useStyles } from "../Morphs/Morph.jss";
import dictionary from "../../dictionary";
import { useTheme } from "@material-ui/core";

function Image({ word, children }) {
    const classes = useStyles({ word: word });
    const theme = useTheme();

    const src = useMemo(() => {
        if (!!dictionary[children])
            return dictionary[children];

        if (theme.palette.type === "dark")
            return "/Images/alt/alt-light.svg";

        if (theme.palette.type === "light")
            return "/Images/alt/alt-dark.svg";

    }, [theme.palette.type]);

    return <img src={src} className={classes.img} alt={word} />;
}

export default Image;
