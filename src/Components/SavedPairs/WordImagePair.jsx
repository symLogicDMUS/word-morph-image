import React, { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import { ReactComponent as Alt } from "./sample.svg";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { PairModifier } from "./PairModifier";
import { useStyles } from "./WordImagePair.jss";
import { Cancel } from "@mui/icons-material";
import AppContext from "../../AppContext";

function WordImagePair(props) {
    const { word, image, handleNewPair, openPairModifier } = props;

    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Card
                    className={classes.card}
                    onClick={() => handleNewPair(word, image, true)}
                >
                    <Cancel
                        fontSize={"small"}
                        className={classes.deletePair}
                        onClick={() =>
                            dispatch({ type: "remove-pair", word: word })
                        }
                    />
                    <CardActionArea>
                        <Avatar
                            variant={"square"}
                            src={image}
                            className={classes.img}
                        >
                            <Alt className={classes.alt} />
                        </Avatar>
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="h2"
                                style={{ textAlign: "center" }}
                            >
                                {word}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    );
}

export default WordImagePair;
