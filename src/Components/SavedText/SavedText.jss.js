import makeStyles from "@mui/styles/makeStyles";
import { alpha } from "@mui/material/styles";

export const useStyles = makeStyles(
    (theme) => ({
        body: {
            display: "flex",
            flexWrap: "wrap",
        },
    }),
    { index: 1 }
);
