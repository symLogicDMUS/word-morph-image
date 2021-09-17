import { alpha } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    (theme) => ({
        avatar: {
            cursor: "pointer",
            width: 400,
            height: 400,
            background: "none",
        },
        alt: { width: "95%", height: "95%", opacity: 0.3 },
        input: {
            display: "none",
        },
    }),
    { index: 1 }
);
