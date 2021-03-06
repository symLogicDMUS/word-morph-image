import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
} from "../MyAppBar/appBarAndPadding.jss";

const spacing = 48;

export const styles = (theme) => ({
    root: {},
    body: {
        width: "100%",
        "@media (min-width:0px) and (orientation: landscape)": {
            height: `calc(100vh - ${appBarHeightSm}px - ${spacing})`,
        },
        "@media screen and (max-width: 960px)": {
            height: `calc(100vh - ${appBarHeightMd}px - ${spacing})`,
        },
        "@media (min-width:960px)": {
            height: `calc(100vh - ${appBarHeightLg}px - ${spacing})`,
        },
    },
    actions: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: `${theme.spacing(3)} 0`,

        "& > *": {
            marginRight: theme.spacing(3),
            "&:last-child": {
                marginRight: 0,
                marginLeft: "auto",
            },
        },
    },
    inputRoot: {
        display: "inline-flex",
        flexWrap: "wrap",
        flex: 1,
        minWidth: 70,
        "@media (min-width:0px) and (orientation: landscape)": {
            maxHeight: `calc(100vh - ${appBarHeightSm}px - ${
                spacing * 2
            }px - 48px)`,
        },
        "@media screen and (max-width: 960px)": {
            maxHeight: `calc(100vh - ${appBarHeightMd}px - ${
                spacing * 2
            }px - 48px)`,
        },
        "@media (min-width:960px)": {
            maxHeight: `calc(100vh - ${appBarHeightLg}px - ${
                spacing * 2
            }px - 48px)`,
        },
        "&$outlined,&$filled": {
            boxSizing: "border-box",
        },
        "&$outlined": {
            paddingLeft: "1rem",
            paddingTop: "1rem",
            overflowY: "scroll",
        },
        "&$filled": {
            paddingLeft: "1rem",
            paddingTop: "1rem",
            overflowY: "scroll",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            background:
                theme.palette.mode === "dark"
                    ? theme.palette.grey[900]
                    : "#f0f0f0",
        },
    },
    input: {
        display: "inline-block",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        appearance: "none", // Remove border in Safari, doesn't seem to break anything in other browsers
        WebkitTapHighlightColor: "rgba(0,0,0,0)", // Remove mobile color flashing (deprecated style).
        float: "left",
        flex: 1,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginBottom: "1rem",
    },
    chipContainer: {
        display: "flex",
        flexFlow: "row wrap",
        cursor: "text",
        marginBottom: -2,
        minHeight: 40,
        "&$labeled&$standard": {
            marginTop: 18,
        },
    },
    outlined: {
        "& input": {
            paddingTop: 4,
            paddingBottom: 12,
            marginTop: 4,
            marginBottom: 4,
        },
    },
    standard: {},
    filled: {
        "& input": {
            height: "3.5rem",
        },
        "$marginDense & input": {
            height: "4rem",
        },
    },
    labeled: {},
    label: {
        top: 4,
        "&$outlined&:not($labelShrink)": {
            top: 2,
            "$marginDense &": {
                top: 5,
            },
        },
        "&$filled&:not($labelShrink)": {
            top: 15,
            "$marginDense &": {
                top: 20,
            },
        },
    },
    labelShrink: {
        top: 0,
    },
    helperText: {
        marginBottom: -20,
    },
    focused: {},
    disabled: {},
    error: {
        "&:after": {
            backgroundColor: theme.palette.error.main,
            transform: "scaleX(1)",
        },
    },
    chip: {
        float: "left",
        margin: "0 1rem 1rem 0",
        "& > .MuiChip-label": {
            paddingLeft: "0 16px",
        },
    },
    marginDense: {},
});
