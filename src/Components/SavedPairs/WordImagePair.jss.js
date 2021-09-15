import { lighten, makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../ResponsiveDrawer/ResponsiveDrawer.jss";

export const useStyles = makeStyles((theme) => ({
    root: {
        // 2 objects per row, drawer hidden by default:
        [theme.breakpoints.down("sm")]: {
            "--contentWidth": `calc(100vw - ${theme.spacing(3) * 2}px)`,
            "--totalNegativeSpaceWidth": `${theme.spacing(3) * 2}px`,
            "--availSpace":
                "calc(var(--contentWidth) - var(--totalNegativeSpaceWidth))",
            "--size": "calc(var(--availSpace) * 0.5)",
        },
        // 2 objects per row, drawer visible by default:
        [theme.breakpoints.up("sm")]: {
            "--contentWidth": `calc(100vw - ${drawerWidth}px - ${
                theme.spacing(3) * 2
            }px)`,
            "--totalNegativeSpaceWidth": `${theme.spacing(3) * 2}px`,
            "--availSpace":
                "calc(var(--contentWidth) - var(--totalNegativeSpaceWidth))",
            "--size": "calc(var(--availSpace) * 0.5)",
        },
        // 3 objects per row:
        [theme.breakpoints.up("md")]: {
            "--contentWidth": `calc(100vw - ${drawerWidth}px - ${
                theme.spacing(3) * 2
            }px)`,
            "--totalNegativeSpaceWidth": `calc(${theme.spacing(3) * 3}px)`,
            "--availSpace":
                "calc(var(--contentWidth) - var(--totalNegativeSpaceWidth))",
            "--size": "calc(var(--availSpace) * 0.333333333333)",
        },
        // 5 objects per row:
        [theme.breakpoints.up("lg")]: {
            "--contentWidth": `calc(100vw - ${drawerWidth}px - ${
                theme.spacing(3) * 2
            }px)`,
            "--totalNegativeSpaceWidth": `calc(${theme.spacing(3) * 4}px)`,
            "--availSpace":
                "calc(var(--contentWidth) - var(--totalNegativeSpaceWidth))",
            "--size": "calc(var(--availSpace) * 0.2)",
        },
    },
    card: {
        maxWidth: "var(--size)",
    },
    img: {
        height: "var(--size)",
        width: "var(--size)",
        background: "none",
    },
    alt: {
        width: "100%",
        height: "100%",
        opacity: 0.3,
    },
    deletePair: {
        margin: theme.spacing(1),
        color: "#999999",
        opacity: 0.6,
        cursor: "pointer",
        "&:hover": {
            color: lighten("#999999", 0.35),
        },
    },
}));
