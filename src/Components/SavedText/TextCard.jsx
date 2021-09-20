import * as React from "react";
import { useContext, useState } from "react";
import TextDialog from "./TextDialog";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { updateParagraphs } from "../../API/updateParagraphs";
import { useHistory } from "react-router-dom";
import AppContext from "../../AppContext";
import { useStyles } from "./TextCard.jss";

function TextCard(props) {
    const { title, children } = props;

    const { state, dispatch } = useContext(AppContext);

    const history = useHistory();

    const classes = useStyles();

    const [dialog, setDialog] = useState(false);

    const deleteParagraph = () => {
        updateParagraphs({ [title]: null }).then((r) => {
            dispatch({
                type: "remove-paragraph",
                title: title,
            });
        });
    };

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
                        color="primary"
                        onClick={() => {
                            dispatch({ type: "update-text", text: children });
                            history.push("/");
                        }}
                    >
                        Load
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        onClick={deleteParagraph}
                    >
                        Delete
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => setDialog(true)}
                    >
                        Edit...
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
