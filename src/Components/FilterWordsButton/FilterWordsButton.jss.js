import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    (theme) => ({
        filterWordsButton: {
            marginRight: theme.spacing(3),
        },
    }),
    { index: 1 }
);
