import { makeStyles } from "@material-ui/core/styles";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../MyAppBar/appBarAndPadding.jss";

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
        morphs: {
            flexGrow: 1,
            overflowY: "scroll",
        },
        buttons: {
            marginTop: theme.spacing(3),
            display: "flex",
            "& > .MuiButton-root": {
                marginRight: theme.spacing(3),
            },
            "& > .MuiIconButton-root": {
                marginRight: "auto",
                marginLeft: "auto",
                transform: `translate(-${theme.spacing(1.5)}px,  0px)`,
            },
        },
        word: {
            display: "inline",
        },
    }),
    { index: 1 }
);
