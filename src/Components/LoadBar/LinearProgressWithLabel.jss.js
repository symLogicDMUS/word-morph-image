import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        root: {
            "@media screen and (max-width: 960px)": {
                width: "95vw",
            },
            "@media screen and (min-width: 960px)": {
                width: "70vw",
            },
        },
    }),
    { index: 1 }
);
