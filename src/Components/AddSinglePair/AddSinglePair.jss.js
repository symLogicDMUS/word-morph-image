import {lighten, makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";
import {appBarHeightLg, appBarHeightMd, appBarHeightSm} from "../MyAppBar/appBarAndPadding.jss";

const s = 6;
const textFieldContainer = 58;
const minSize = 150;

export const useStyles = makeStyles((theme) => ({

    body: {
        display: "flex",
        flexDirection: "column",
        "@media (min-width:0px) and (orientation: landscape)": {
            height: `calc(100vh - ${appBarHeightSm}px - ${theme.spacing(s)}px)`,
            width: `calc(100vw - ${theme.spacing(s)}px)`,
        },
        "@media screen and (max-width: 960px)": {
            height: `calc(100vh - ${appBarHeightMd}px - ${theme.spacing(s)}px)`,
            width: `calc(100vw - ${theme.spacing(s)}px)`,
        },
        "@media (min-width:960px)": {
            height: `calc(100vh - ${appBarHeightLg}px - ${theme.spacing(s)}px)`,
            width: `calc(100vw - ${drawerWidth}px - ${theme.spacing(s)}px)`,
        },
    },

    card: props => {
        const calculations = {
            '--heightSm': `calc(100vh - ${appBarHeightSm}px - ${theme.spacing(s)}px)`,
            '--heightMd': `calc(100vh - ${appBarHeightMd}px - ${theme.spacing(s)}px)`,
            '--heightLg': `calc(100vh - ${appBarHeightLg}px - ${theme.spacing(s)}px)`,

            '--widthSm': `calc(100vw - ${theme.spacing(s)}px)`,
            '--widthMd': 'var(--widthSm)',
            '--widthLg': `calc(100vw - ${drawerWidth}px - ${theme.spacing(s)}px)`,
        }

        if (props.landscape) {
            return {
                ...calculations,

                "@media (min-width:0px) and (orientation: landscape)": {
                    width: `var(--heightSm)`,
                    height: `var(--heightSm)`,
                },
                "@media screen and (max-width: 960px)": {
                    width: `var(--heightMd)`,
                    height: `var(--heightMd)`,
                },
                "@media (min-width:960px)": {
                    width: `var(--heightLg)`,
                    height: `var(--heightLg)`,
                },
                minWidth: minSize,
                minHeight: minSize,
                margin: 'auto',
            }
        } else {
            return {
                ...calculations,

                "@media (min-width:0px) and (orientation: landscape)": {
                    width: `var(--widthSm)`,
                    height: `var(--widthSm)`,
                },
                "@media screen and (max-width: 960px)": {
                    width: `var(--widthMd)`,
                    height: `var(--widthMd)`,
                },
                "@media (min-width:960px)": {
                    width: `var(--widthLg)`,
                    height: `var(--widthLg)`,
                },
                minWidth: minSize,
                minHeight: minSize,
                margin: 'auto',
            }
        }
    },
    avatar: props => {
        if (props.landscape) {
            return {
                background: "none",
                "@media (min-width:0px) and (orientation: landscape)": {
                    width: `calc(var(--heightSm) - ${textFieldContainer}px)`,
                    height: `calc(var(--heightSm) - ${textFieldContainer}px)`,
                },
                "@media screen and (max-width: 960px)": {
                    width: `calc(var(--heightMd) - ${textFieldContainer}px)`,
                    height: `calc(var(--heightMd) - ${textFieldContainer}px)`,
                },
                "@media (min-width:960px)": {
                    width: `calc(var(--heightLg) - ${textFieldContainer}px)`,
                    height: `calc(var(--heightLg) - ${textFieldContainer}px)`,
                },
                minWidth: minSize,
                minHeight: minSize,
                margin: 'auto',
            }
        } else {
            return {
                background: "none",
                "@media (min-width:0px) and (orientation: landscape)": {
                    width: `calc(var(--widthSm) - ${textFieldContainer}px)`,
                    height: `calc(var(--widthSm) - ${textFieldContainer}px )`,
                },
                "@media screen and (max-width: 960px)": {
                    width: `calc(var(--widthMd) - ${textFieldContainer}px)`,
                    height: `calc(var(--widthMd) - ${textFieldContainer}px)`,
                },
                "@media (min-width:960px)": {
                    width: `calc(var(--widthLg) - ${textFieldContainer}px)`,
                    height: `calc(var(--widthLg) - ${textFieldContainer}px)`,
                },
                minWidth: minSize,
                minHeight: minSize,
                margin: 'auto',
            }
        }
    },
    alt: { width: "98%", height: "98%", opacity: 0.3 },
    input: {
        display: "none",
    },
    textFieldContainer: {
        display: 'flex',
        height: textFieldContainer,
    },
    textField: {
        "& .MuiInput-root": {
            height: textFieldContainer,
        },
        "& .MuiFilledInput-input": {
            height: textFieldContainer*0.625,
            padding: "12px 12px 10px",
        },
        // backgroundColor: lighten(theme.palette.background.paper, 0.1)
    }
}), {index: 1});