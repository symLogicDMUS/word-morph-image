import React, { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { Badge, Typography } from "@mui/material";
import { useStyles } from "../Morphs/Morph.jss";

function Morphed({ children }) {
    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    const [badge, setBadge] = useState(false);
    const toggleBadge = () => setBadge((prevState) => !prevState);

    return (
        <>
            {!!state.dictionary[children] ? (
                <>
                    <img
                        src={state.dictionary[children]}
                        className={classes.img}
                        onClick={toggleBadge}
                        alt={children}
                    />
                    {badge && (
                        <Badge
                            badgeContent={children}
                            color="secondary"
                            className={classes.badge}
                        />
                    )}
                </>
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
