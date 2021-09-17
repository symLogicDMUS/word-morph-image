import makeStyles from '@mui/styles/makeStyles';
import { grey } from "@mui/material/colors";

const grayValue = {
    light: grey["700"],
    dark: grey["300"],
};

export const useStyles = makeStyles(
    (theme) => ({
        avatar: {
            width: "3.5rem",
            height: "3.5rem",
            cursor: "pointer",
            "& .MuiSvgIcon-root": {
                color: grayValue[theme.palette.mode],
                "& > *": {
                    marginRight: theme.spacing(1),
                },
            },
        },
        input: {
            display: "none",
        },
    }),
    { index: 1 }
);
