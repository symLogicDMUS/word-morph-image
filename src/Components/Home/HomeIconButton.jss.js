import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        listItem: {
            display: "flex",
            flexDirection: "column",
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            borderRadius: "50%",
            cursor: "pointer",
        },
        icon: {
            width: 64,
            height: 64,
        },
        githubIcon: {
            width: 53.15,
            height: 53.15,
        },
        iconButtonSubtitle: {
            width: "100%",
            textAlign: "center",
        },
    }),
    { index: 1 }
);
