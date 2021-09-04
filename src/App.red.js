export function reducer(state, action) {
    switch (action.type) {
        // word/image pair:
        case "add-pair":
            return {
                ...state,
                dictionary: {
                    ...state.dictionary,
                    [action.word]: action.url,
                },
            };
        case "update-dictionary":
            return {
                ...state,
                dictionary: {
                    ...state.dictionary,
                    ...action.newPairs,
                },
            };
        case "update-text":
            return {
                ...state,
                text: action.text,
            };
        case "update-mode":
            return {
                ...state,
                isDarkMode: action.isDarkMode,
            };
        default:
            throw new Error();
    }
}
