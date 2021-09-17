import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        iconContainer: {
            height: "5.5rem",
            padding: "1rem 0px",
            marginBottom: "1rem",
            position: "relative",
            top: "-0.5rem",
        },
        icon: {
            height: "100%",
            cursor: "pointer",
        },
    }),
    { index: 1 }
);
