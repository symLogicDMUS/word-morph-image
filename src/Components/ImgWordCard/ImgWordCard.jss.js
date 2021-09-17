import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        root: {
            display: "inline-block",
            margin: theme.spacing(1),
        },
        img: {
            width: 150,
            height: 150,
        },
    }),
    { index: 1 }
);
