import makeStyles from '@mui/styles/makeStyles';

const height = 3;

export const useStyles = makeStyles(
    (theme) => ({
        underline: {
            width: "100%",
            height: height,
        },
        notFocused: {
            backgroundColor: "#fff",
        },
        focused: {
            backgroundColor: theme.palette.primary.main,
            position: "relative",
            top: -height,
        },
    }),
    { index: 1 }
);
