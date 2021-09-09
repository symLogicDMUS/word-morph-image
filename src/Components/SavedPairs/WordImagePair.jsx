import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import {ReactComponent as Alt} from "./sample.svg";
import {Avatar, TextField} from "@material-ui/core";
import { useStyles } from "./WordImagePair.jss";

function WordImagePair(props) {
    const { word, image } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <Avatar src={image} className={classes.img}>
                        <Alt className={classes.alt} />
                    </Avatar>
                </CardActionArea>
                <CardActions>
                    <TextField defaultValue={word} fullWidth/>
                </CardActions>
            </Card>
        </div>
    );
}

export default WordImagePair;
