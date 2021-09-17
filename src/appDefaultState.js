export const appDefaultState = {
    text: "",
    dictionary: {},
    paragraphs: {},
    isDarkMode: true,
    alert: {
        open: false,
        message: "",
        severity: "",
    },
    numUpdates: 0, // to make useEffect and useMemo dependency arrays easier.
};
