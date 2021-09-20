import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(
    (theme) => ({
        button: {
            marginRight: theme.spacing(3),
        },
        dialog: {
            backgroundColor: theme.palette.background.paper,
        },
        paper: {
            height: "100%",
            display: "grid",
            gridAutoFlow: "column",
        },
    }),
    { index: 1 }
);
