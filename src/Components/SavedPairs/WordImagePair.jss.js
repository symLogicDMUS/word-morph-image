import { lighten } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { drawerWidth } from "../ResponsiveDrawer/ResponsiveDrawer.jss";

const spacing = 48;

export const useStyles = makeStyles((theme) => ({
    root: {
        "--spacing": spacing,
        "--contentWidthSm": "100vw",
        "--contentWidthLg": `calc(100vw - ${drawerWidth}px)`,
        "--availSpaceSm": `calc( var(--contentWidthSm) - ${spacing}px)`,
        "--availSpaceLg": `calc( var(--contentWidthLg) - ${spacing}px)`,
        "--sizeSm": `calc( var(--availSpaceSm) * 3)`,
        "--sizeLg": `calc( var(--availSpaceLg) * 5)`,

        [theme.breakpoints.up("xs")]: {
            padding: spacing * 0.4,
        },
        [theme.breakpoints.up("md")]: {
            padding: spacing * 0.435,
        },
        [theme.breakpoints.up("lg")]: {
            paddingLg: spacing * 0.45,
        },
    },
    card: {
        [theme.breakpoints.up("xs")]: {
            maxWidth: `calc( (100vw - ${spacing * 2}px) )`,
        },
        [theme.breakpoints.up("sm")]: {
            maxWidth: `calc( (100vw - ${spacing * 3}px) / 2 )`,
        },
        [theme.breakpoints.up("md")]: {
            maxWidth: `calc( ( (100vw - ${drawerWidth}px) - ${
                spacing * 4
            }px) / 3 )`,
        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: `calc( ( (100vw - ${drawerWidth}px) - ${
                spacing * 5
            }px) / 4 )`,
        },
    },
    img: {
        [theme.breakpoints.up("xs")]: {
            width: `calc( (100vw - ${spacing * 2}px) )`,
            height: `calc( (100vw - ${spacing * 2}px) )`,
        },
        [theme.breakpoints.up("sm")]: {
            width: `calc( (100vw - ${spacing * 3}px) / 2 )`,
            height: `calc( (100vw - ${spacing * 3}px) / 2 )`,
        },
        [theme.breakpoints.up("md")]: {
            width: `calc( ( (100vw - ${drawerWidth}px) - ${
                spacing * 4
            }px) / 3 )`,
            height: `calc( ( (100vw - ${drawerWidth}px) - ${
                spacing * 4
            }px) / 3 )`,
        },
        [theme.breakpoints.up("lg")]: {
            width: `calc( ( (100vw - ${drawerWidth}px) - ${
                spacing * 5
            }px) / 4 )`,
            height: `calc( ( (100vw - ${drawerWidth}px) - ${
                spacing * 5
            }px) / 4 )`,
        },
        background: "none",
    },
    alt: {
        width: "100%",
        height: "100%",
        opacity: 0.16,
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
