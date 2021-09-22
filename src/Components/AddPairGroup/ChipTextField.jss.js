import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        span: {
            outline: "none",
            padding: '0.25rem',
            marginRight: theme.spacing(2),
            border: "1px solid rgba(0, 0, 0, 0)",
            fontSize: theme.typography.htmlFontSize,
        },
    }),
    { index: 1 }
);
