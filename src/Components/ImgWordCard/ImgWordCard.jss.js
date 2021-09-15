import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-block",
        margin: theme.spacing(1),
    },
    img: {
        width: 150,
        height: 150
    },
}), {index: 1});