import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        span: {
            outline: "none",
            border: "1px solid rgba(0, 0, 0, 0)",
            marginRight: theme.spacing(2),
            padding: '0.25rem',
        },
    }),
    { index: 1 }
);
