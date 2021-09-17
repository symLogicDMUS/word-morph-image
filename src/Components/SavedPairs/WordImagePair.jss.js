import { lighten } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { drawerWidth } from "../ResponsiveDrawer/ResponsiveDrawer.jss";

export const useStyles = makeStyles((theme) => ({
    root: {
        // 2 objects per row, drawer hidden by default:
        [theme.breakpoints.down('md')]: {
            "--contentWidth": `calc(100vw - calc(${theme.spacing(3)} * 2))`,
            "--totalNegativeSpaceWidth": `calc(${theme.spacing(3)} * 2)`,
            "--availSpace":
                "calc(var(--contentWidth) - var(--totalNegativeSpaceWidth))",
            "--size": "calc(var(--availSpace) * 0.5)",
        },
        // 2 objects per row, drawer visible by default:
        [theme.breakpoints.up("sm")]: {
            "--contentWidth": `calc(100vw - ${drawerWidth}px - ${
                theme.spacing(3) * 2
            }px)`,
            "--totalNegativeSpaceWidth": `calc(${theme.spacing(3)} * 2)`,
            "--availSpace":
                "calc(var(--contentWidth) - var(--totalNegativeSpaceWidth))",
            "--size": "calc(var(--availSpace) * 0.5)",
        },
        // 3 objects per row:
        [theme.breakpoints.up("md")]: {
            "--contentWidth": `calc(100vw - ${drawerWidth}px - ${
                theme.spacing(3) * 2
            }px)`,
            "--totalNegativeSpaceWidth": `calc(calc(${theme.spacing(3)} * 3))`,
            "--availSpace":
                "calc(var(--contentWidth) - var(--totalNegativeSpaceWidth))",
            "--size": "calc(var(--availSpace) * 0.333333333333)",
        },
        // 5 objects per row:
        [theme.breakpoints.up("lg")]: {
            "--contentWidth": `calc(100vw - ${drawerWidth}px - ${
                theme.spacing(3) * 2
            }px)`,
            "--totalNegativeSpaceWidth": `calc(calc(${theme.spacing(3)} * 4))`,
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
