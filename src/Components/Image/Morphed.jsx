import React, { useState } from "react";
import { Badge, Typography } from "@mui/material";
import { useStyles } from "../Morphs/Morph.jss";

function Morphed({ word, children }) {
    const src = !!children ? children : null;

    const classes = useStyles();

    const [badge, setBadge] = useState(false);
    const toggleBadge = () => setBadge((prevState) => !prevState);

    return (
        <>
            {!!src ? (
                <>
                    <img
                        src={src}
                        alt={word}
                        onClick={toggleBadge}
                        className={classes.img}
                    />
                    {badge && (
                        <Badge
                            color="secondary"
                            badgeContent={word}
                            className={classes.badge}
                        />
                    )}
                </>
            ) : (
                <Typography className={classes.word}>{word + " "}</Typography>
            )}
        </>
    );

    // return
}

export default Morphed;
