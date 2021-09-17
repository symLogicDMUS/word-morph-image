import React, { useContext, useState } from "react";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { ReactComponent as Alt } from "./sample.svg";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { PairModifier } from "./PairModifier";
import { useStyles } from "./WordImagePair.jss";
import { Cancel } from "@material-ui/icons";
import AppContext from "../../AppContext";

function WordImagePair(props) {
    const { word, image } = props;

    const { state, dispatch } = useContext(AppContext);

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
