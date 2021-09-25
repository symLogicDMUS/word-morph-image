export const appDefaultState = {
    text: "",
    dictionary: {},
    paragraphs: {},
    isDarkMode: true,
    alert: {
        open: false,
        message: "",
        severity: "",
        action: null,
        title: null,
        autoHideDuration: 3000,
    },
    numUpdates: 0, // to make useEffect and useMemo dependency arrays easier.
};
