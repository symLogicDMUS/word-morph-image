import makeStyles from "@mui/styles/makeStyles";
import { alpha } from "@mui/material/styles";

export const useStyles = makeStyles(
    (theme) => ({
        card: {
            minWidth: 345,
            backgroundColor: alpha("#fff", 0.01),
            flex: 1,
            margin: theme.spacing(1.5),
        },
        text: {
            height: 150,
            overflowY: "hidden",
            cursor: "pointer",
        },
    }),
    { index: 1 }
);
