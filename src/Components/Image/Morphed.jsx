import React, { useContext, useMemo } from "react";
import { useStyles } from "../Morphs/Morph.jss";
import { Typography, useTheme } from "@material-ui/core";
import AppContext from "../../AppContext";

function Morphed({ children }) {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    return (
        <>
            {!!state.dictionary[children] ? (
                <img
                    src={state.dictionary[children]}
                    className={classes.img}
                    alt={children}
                />
            ) : (
                <Typography className={classes.word}>
                    {children + " "}
                </Typography>
            )}
        </>
    );

    // return
}

export default Morphed;
