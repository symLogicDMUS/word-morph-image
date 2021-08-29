import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./PlanetOrMoon";
import { useTheme } from "@material-ui/core";

function PlanetOrMoon(props) {
    const { name, path } = props;
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        image={path}
                        alt={name}
                        component="img"
                        title="Image of planet or moon."
                        className={classes.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button>Edit...</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default PlanetOrMoon;
