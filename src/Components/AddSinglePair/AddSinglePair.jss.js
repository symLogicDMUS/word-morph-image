import makeStyles from "@mui/styles/makeStyles";
import { drawerWidth } from "../ResponsiveDrawer/ResponsiveDrawer.jss";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../MyAppBar/appBarAndPadding.jss";
import { alpha } from "@mui/material/styles";

const spacing = 48;

export const useStyles = makeStyles(
    (theme) => ({
        body: {
            display: "flex",
            flexDirection: "column",
            "@media (min-width:0px) and (orientation: landscape)": {
                height: `calc(100vh - ${appBarHeightSm}px - ${spacing}px)`,
                width: `calc(100vw - ${spacing}px)`,
            },
            "@media screen and (max-width: 960px)": {
                height: `calc(100vh - ${appBarHeightMd}px - ${spacing}px)`,
                width: `calc(100vw - ${spacing}px)`,
            },
            "@media (min-width:960px)": {
                height: `calc(100vh - ${appBarHeightLg}px - ${spacing}px)`,
                width: `calc(100vw - ${drawerWidth}px - ${spacing}px)`,
            },
            "& .MuiOutlinedInput-root": {
                paddingRight: 0,
                paddingLeft: theme.typography.body2.fontSize,
            },
        },

        paper: (props) => {
            if (props.landscape) {
                return {
                    width: "80vh",
                    height: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    border: theme.palette.divider,
                    marginLeft: "auto",
                    marginRight: "auto",
                };
            } else {
                return {
                    width: "80vw",
                    height: "80vw",
                    [theme.breakpoints.down("sm")]: {
                        width: `calc(100vw - ${spacing}px)`,
                        height: `calc(100vw - ${spacing}px)`,
                    },
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    marginLeft: "auto",
                    marginRight: "auto",
                };
            }
        },
        label: {
            width: "100%",
            height: "100%",
            display: "flex",
            cursor: "pointer",
        },
        img: {
            width: "100%",
            height: "100%",
        },
        alt: {
            width: "80%",
            height: "80%",
            margin: "auto",
            opacity: theme.palette.mode === "dark" ? 0.08 : 1,
        },
        textField: (props) => {
            if (props.landscape) {
                return {
                    width: "80vh",
                    background: alpha("#fff", 0.02),
                    marginLeft: "auto",
                    marginRight: "auto",
                };
            } else {
                return {
                    width: "80vw",
                    [theme.breakpoints.down("sm")]: {
                        width: `calc(100vw - ${spacing}px)`,
                    },
                    background: alpha("#fff", 0.02),
                    marginLeft: "auto",
                    marginRight: "auto",
                };
            }
        },
        input: {
            display: "none",
        },
        addButton: {
            borderRadius: 0,
            height: "100%",
        },
    }),
    { index: 1 }
);
