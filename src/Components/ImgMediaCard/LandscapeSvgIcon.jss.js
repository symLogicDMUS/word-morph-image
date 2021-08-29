import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    svg: {
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "70%",
        },
        [theme.breakpoints.up("md")]: {
            width: "60%",
        },
    },
}));
