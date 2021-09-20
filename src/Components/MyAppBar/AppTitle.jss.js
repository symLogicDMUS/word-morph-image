import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        container: {
            height: 48,
            padding: "13px 0px",
            marginRight: "auto",
            cursor: "pointer",
        },
        title: {
            height: "1.5rem",
        },
    }),
    { index: 1 }
);
