import {lighten, makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";
import {appBarHeightLg, appBarHeightMd, appBarHeightSm} from "../MyAppBar/appBarAndPadding.jss";

const s = 6;
const actions = 98;
const textFieldHeight = 58;
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
                    width: `calc(var(--heightSm) - ${actions}px)`,
                    height: `calc(var(--heightSm) - ${actions}px)`,
                },
                "@media screen and (max-width: 960px)": {
                    width: `calc(var(--heightMd) - ${actions}px)`,
                    height: `calc(var(--heightMd) - ${actions}px)`,
                },
                "@media (min-width:960px)": {
                    width: `calc(var(--heightLg) - ${actions}px)`,
                    height: `calc(var(--heightLg) - ${actions}px)`,
                },
                minWidth: minSize,
                minHeight: minSize,
                margin: 'auto',
                cursor: "pointer",
            }
        } else {
            return {
                background: "none",
                "@media (min-width:0px) and (orientation: landscape)": {
                    width: `calc(var(--widthSm) - ${actions}px)`,
                    height: `calc(var(--widthSm) - ${actions}px )`,
                },
                "@media screen and (max-width: 960px)": {
                    width: `calc(var(--widthMd) - ${actions}px)`,
                    height: `calc(var(--widthMd) - ${actions}px)`,
                },
                "@media (min-width:960px)": {
                    width: `calc(var(--widthLg) - ${actions}px)`,
                    height: `calc(var(--widthLg) - ${actions}px)`,
                },
                minWidth: minSize,
                minHeight: minSize,
                margin: 'auto',
                cursor: "pointer",
            }
        }
    },
    alt: { width: "100%", height: "100%", opacity: 0.3 },
    input: {
        display: "none",
    },
    actionsArea: {
        height: actions,
    },
    textField: {
        "& .MuiInput-root": {
            height: textFieldHeight,
            padding: "12px 12px 10px",

        },
        "& .MuiFilledInput-input": {
            height: textFieldHeight*0.625,
            padding: "12px 12px 10px",
        },
        background: '#51515155',
    },
    addButton: {
        height: 'auto',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
}), {index: 1});