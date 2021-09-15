import { copy } from "./helpers/copy";

export function reducer(state, action) {
    let newDict;
    switch (action.type) {
        // word/image pair:
        case "add-pair":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                dictionary: {
                    ...state.dictionary,
                    [action.word]: action.url,
                },
            };
        case "update-pair":
            newDict = copy(state.dictionary);
            delete newDict[action.oldWord];
            newDict[action.word] = action.url;
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                dictionary: newDict,
            };
        case "remove-pair":
            newDict = copy(state.dictionary);
            delete newDict[action.word];
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                dictionary: newDict,
            };
        case "new-dictionary":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                dictionary: action.dictionary,
            };
        case "update-dictionary":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                dictionary: {
                    ...state.dictionary,
                    ...action.newPairs,
                },
            };
        case "update-text":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                text: action.text,
            };
        case "update-mode":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                isDarkMode: action.isDarkMode,
            };
        default:
            throw new Error();
    }
}
