import makeStyles from "@mui/styles/makeStyles";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../MyAppBar/appBarAndPadding.jss";

export const useStyles = makeStyles(
    (theme) => ({
        body: {
            width: "100%",
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
        actions: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
        },
        icon: {
            marginRight: theme.spacing(1),
        },
    }),
    { index: 1 }
);
