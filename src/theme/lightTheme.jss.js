const lightTheme = {
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    height: "auto",
                    borderRadius: 6,
                    padding: "0.5rem 1rem",
                },
                label: {
                    height: "auto",
                    paddingRight: 0,
                },
            }
        },
    },
    palette: {
        mode: "light",
    }
};

export default lightTheme;
