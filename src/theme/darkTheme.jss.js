import { blue, pink } from "@material-ui/core/colors";

const darkTheme = {
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#333333",
            },
        },
        MuiButton: {
            containedPrimary: {
                color: "#000",
            },
            containedSecondary: {
                color: "#000",
            },
        },
        MuiChip: {
            root: {
                height: "auto",
                borderRadius: 6,
                padding: "0.5rem 1rem",
            },
            label: {
                height: "auto",
                paddingRight: 0,
            },
        },
        MuiFab: {
            primary: {
                color: "#000",
            },
            secondary: {
                color: "#000",
            },
        },
    },
    palette: {
        type: "dark",
        primary: {
            main: blue[200],
            light: blue[100],
            dark: blue[300],
            contrastText: "#fff",
        },
        secondary: {
            main: pink[200],
            light: pink[100],
            dark: pink[300],
            contrastText: "#fff",
        },
        background: {
            default: "#212121",
        },
    },
    typography: {
        fontSize: 16,
    },
};

export default darkTheme;
