import makeStyles from '@mui/styles/makeStyles';
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
        textBox: {
            flexGrow: 1,
        },
        buttons: {
            marginTop: theme.spacing(3),
        },
        marginLeft: {
            marginLeft: theme.spacing(3),
        },
        marginRight: {
            marginRight: theme.spacing(3),
        },
    }),
    { index: 1 }
);
