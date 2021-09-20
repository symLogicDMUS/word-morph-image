import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        card: {
            flex: 1,
            minWidth: 345,
            margin: theme.spacing(3),
        },
        text: {
            height: 150,
            overflowY: "hidden",
            cursor: "pointer",
        },
    }),
    { index: 1 }
);
