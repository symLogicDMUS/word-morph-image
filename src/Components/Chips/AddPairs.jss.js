import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        fabButton: {
            "@media screen and (max-width: 620px)": {
                position: "fixed",
                bottom: theme.spacing(3),
                right: theme.spacing(3),
            },
        },
    }),
    { index: 1 }
);
