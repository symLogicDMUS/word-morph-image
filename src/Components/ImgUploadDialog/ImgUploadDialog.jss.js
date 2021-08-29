import { darken, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    (theme) => ({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
            backgroundColor: darken(theme.palette.background.paper, 0.3),
        },
    }),
    { index: 1 }
);
