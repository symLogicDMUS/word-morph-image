const lightTheme = {
    overrides: {
        MuiIconButton: {
            root: {
                color: "#fff",
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
            },
        },
    },
    palette: {
        type: "light",
        primary: {
            main: "#1a73e8",
            light: "#69a1ff",
            dark: "#0049b5",
        }
    },
    typography: {
        fontSize: 16,
    },
};

export default lightTheme;
