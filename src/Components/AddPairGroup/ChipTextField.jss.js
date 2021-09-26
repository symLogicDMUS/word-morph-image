import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        input: {
            outline: "none",
            border: "none",
            background: "none",
            fontFamily: "Roboto",
            // marginLeft: theme.spacing(1),
            // marginRight: theme.spacing(1),
            fontSize: theme.typography.htmlFontSize,
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
        },
    }),
    { index: 1 }
);
