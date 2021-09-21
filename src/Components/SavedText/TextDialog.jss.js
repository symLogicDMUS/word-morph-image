import { alpha } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(
    (theme) => ({
        text: {
            "& .MuiInput-input": {
                color: theme.palette.mode === "dark" ? theme.palette.primary.light : '#000',
            },
        },
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
