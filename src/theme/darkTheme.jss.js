import {appBarHeightLg, appBarHeightMd, appBarHeightSm} from "../Components/MyAppBar/appBarAndPadding.jss";

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
        MuiFormControl: {
            styleOverrides: {
                root: {
                    "@media (min-width:0px) and (orientation: landscape)": {
                        maxHeight: `calc(100vh - ${appBarHeightSm}px - 48px)`,
                    },
                    "@media screen and (max-width: 960px)": {
                        maxHeight: `calc(100vh - ${appBarHeightMd}px - 48px)`,
                    },
                    "@media (min-width:960px)": {
                        maxHeight: `calc(100vh - ${appBarHeightLg}px - 48px)`,
                    },
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "@media (min-width:0px) and (orientation: landscape)": {
                        maxHeight: `calc(100vh - ${appBarHeightSm}px - 48px)`,
                    },
                    "@media screen and (max-width: 960px)": {
                        maxHeight: `calc(100vh - ${appBarHeightMd}px - 48px)`,
                    },
                    "@media (min-width:960px)": {
                        maxHeight: `calc(100vh - ${appBarHeightLg}px - 48px)`,
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
