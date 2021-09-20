import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "./ModalTextCard.jss";

function ModalTextCard(props) {
    const { title, onClick, children } = props;

    const classes = useStyles();

    return (
        <>
            <Card className={classes.card} onClick={onClick}>
                <CardContent>
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
            </Card>
        </>
    );
}

export default ModalTextCard;
