import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { ReactComponent as Alt } from "./sample.svg";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./WordImagePair.jss";
import { PairModifier } from "./PairModifier";

function WordImagePair(props) {
    const { word, image } = props;

    const [pairModifier, setPairModifier] = useState(false);

    const classes = useStyles();

    return (
        <>
            <PairModifier
                word={word}
                image={image}
                open={pairModifier}
                close={() => setPairModifier(false)}
            />
            <div className={classes.root}>
                <Card
                    className={classes.card}
                    onClick={() => setPairModifier(true)}
                >
                    <CardActionArea>
                        <Avatar src={image} className={classes.img}>
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
