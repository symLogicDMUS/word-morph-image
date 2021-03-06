import makeStyles from "@mui/styles/makeStyles";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../MyAppBar/appBarAndPadding.jss";
import { alpha } from "@mui/material/styles";

export const useStyles = makeStyles(
    (theme) => ({
        body: {
            display: "flex",
            flexDirection: "column",
            "@media (min-width:0px) and (orientation: landscape)": {
                height: `calc(100vh - ${appBarHeightSm}px - ${theme.spacing(
                    6
                )}px)`,
            },
            "@media screen and (max-width: 960px)": {
                height: `calc(100vh - ${appBarHeightMd}px - ${theme.spacing(
                    6
                )}px)`,
            },
            "@media (min-width:960px)": {
                height: `calc(100vh - ${appBarHeightLg}px - ${theme.spacing(
                    6
                )}px)`,
            },
        },
        textBox: {
            flexGrow: 1,
            background:
                theme.palette.mode === "dark"
                    ? alpha(theme.palette.background.paper, 0.5)
                    : "inherit",
        },
    }),
    { index: 1 }
);
