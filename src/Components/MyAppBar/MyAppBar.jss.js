import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../ResponsiveDrawer/ResponsiveDrawer.jss";

export const useStyles = makeStyles(
    (theme) => ({
        appBar: {
            [theme.breakpoints.up("md")]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        title: {
            marginRight: "auto",
        },
    }),
    { index: 1 }
);
