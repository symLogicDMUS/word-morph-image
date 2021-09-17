import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        body: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
                margin: theme.spacing(3),
            },
        },
    }),
    {index: 1}
);