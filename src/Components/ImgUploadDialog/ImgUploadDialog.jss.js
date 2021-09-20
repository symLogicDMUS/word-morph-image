import { darken } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

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
