import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        pairs: (props) => ({
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            "& > *": {
                marginBottom: theme.spacing(3),
            },
        }),
    }),
    { index: 1 }
);
