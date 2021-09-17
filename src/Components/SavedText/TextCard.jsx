import * as React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import TextDialog from "./TextDialog";
import { useHistory } from "react-router-dom";

export const useStyles = makeStyles(
    (theme) => ({
        card: {
            maxWidth: 345,
        },
        text: {
            maxHeight: 150,
            overflowY: "hidden",
        },
    }),
    { index: 1 }
);

function TextCard(props) {
    const { title, children } = props;

    const history = useHistory();

    const classes = useStyles();

    const [dialog, setDialog] = useState(false);

    return (
        <>
            <Card className={classes.card}>
                <CardContent onClick={() => setDialog(true)}>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.text}
                    >
                        {children}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={() =>
                            history.push("/morphs", {
                                wordIndex: 0,
                            })
                        }
                    >
                        Morph
                    </Button>
                    <Button
                        size="small"
                        onClick={() =>
                            history.push("/cards", {
                                wordIndex: 0,
                            })
                        }
                    >
                        Cards
                    </Button>
                </CardActions>
            </Card>
            <TextDialog
                open={dialog}
                title={title}
                text={children}
                onBackdropClick={() => setDialog(false)}
            />
        </>
    );
}

export default TextCard;
