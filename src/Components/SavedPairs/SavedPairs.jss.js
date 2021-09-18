import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        pairs: (props) => ({
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "space-between",
            // paddingLeft: theme.spacing(1.5),
            // paddingRight: theme.spacing(1.5),
            "& > *": {
                // marginBottom: theme.spacing(6),
                // marginLeft: theme.spacing(1.5),
                // marginRight: theme.spacing(1.5),
            },
        }),
    }),
    { index: 1 }
);
