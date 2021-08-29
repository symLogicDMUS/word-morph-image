import React, {useContext, useMemo} from "react";
import { useStyles } from "../Morphs/Morph.jss";
import { useTheme } from "@material-ui/core";
import AppContext from "../../AppContext";

function Image({ word, children }) {
    const {state, dispatch} = useContext(AppContext);

    const classes = useStyles({ word: word });
    const theme = useTheme();

    const src = useMemo(() => {
        if (!!state.dictionary[children]) return state.dictionary[children];

        if (theme.palette.type === "dark") return "/Images/alt/alt-light.svg";

        if (theme.palette.type === "light") return "/Images/alt/alt-dark.svg";
    }, [theme.palette.type]);

    return <img src={src} className={classes.img} alt={word} />;
}

export default Image;
