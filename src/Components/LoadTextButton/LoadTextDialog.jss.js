import { makeStyles } from "@mui/styles";
import { alpha, lighten } from "@mui/material/styles";

export const useStyles = makeStyles(
    (theme) => ({
        dialog: {
            backgroundColor: theme.palette.background.paper,
        },
        bottomArea: {
            position: "sticky",
            bottom: 0,
            border: `1.5px solid ${theme.palette.divider}`,
        },
        actionButtonsBar: {
            width: "100%",
            background: alpha("#fff", 0.08),
        },
    }),
    { index: 1 }
);
