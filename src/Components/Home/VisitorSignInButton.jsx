import clsx from "clsx";
import firebase from "firebase/app";
import "firebase/auth";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { PermIdentity } from "@material-ui/icons";
import { useStyles } from "./VisitorSignInButton.jss";

function VisitorSignInButton(props) {
    const classes = useStyles();
    return (
        <Button
            onClick={() => firebase.auth().signInAnonymously()}
            className={clsx(classes.button, { [classes.color1]: true })}
            variant={"contained"}
        >
            <PermIdentity fontSize={"small"} />
            <Typography className={classes.text} noWrap>
                Sign in as visitor
            </Typography>
        </Button>
    );
}

export default VisitorSignInButton;
