const darkTheme = {
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
        MuiTextField: {
            styleOverrides: {
                root: {
                    input: {
                        color: '#fff',
                    },
                }
            }
        },
    },
    palette: {
        mode: "dark",
    },
};

export default darkTheme;
