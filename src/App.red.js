export function reducer(state, action) {
    switch (action.type) {
        case "add-pair":
            return {};
        case "add-group":
            return {};
        case "update-text":
            return {
                ...state,
                text: action.text,
            };
        case "update-mode":
            return {
                ...state,
                isDarkMode: action.isDarkMode,
            }
        default:
            throw new Error();
    }
}
