export const appDefaultState = {
    text: "",
    dictionary: {},
    isDarkMode: true,
    alert: {
        open: false,
        message: "",
        severity: "",
    },
    numUpdates: 0, // to make useEffect and useMemo dependency arrays easier.
};
