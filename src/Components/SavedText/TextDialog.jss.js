import { alpha, lighten } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        input: {
            opacity: 0.85,
            background: alpha("#fff", 0.03),
            padding: theme.spacing(2),
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 4,
        },
    }),
    { index: 1 }
);
