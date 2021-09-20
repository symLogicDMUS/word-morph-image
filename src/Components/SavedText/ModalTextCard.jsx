import * as React from "react";
import { useTheme } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "./ModalTextCard.jss";

function ModalTextCard(props) {
    const { title, index, selected, onClick, children } = props;

    const theme = useTheme();

    const classes = useStyles();

    let style = null;
    if (index === selected) {
        style = { border: `1px solid ${theme.palette.primary.main}` };
    }

    return (
        <>
            <Card className={classes.card} onClick={onClick} style={style}>
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
