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
                alert: {
                    open: true,
                    severity: "success",
                    message: "Pairs added successfully!",
                },
            };
        case "update-text":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                text: action.text,
            };
        case "new-paragraphs":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                paragraphs: action.paragraphs,
            };
        case "update-paragraphs":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                paragraphs: {
                    ...state.paragraphs,
                    [action.title]: action.text,
                },
                alert: {
                    open: true,
                    severity: "success",
                    message: "Text added successfully!",
                },
            };
        case "update-mode":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                isDarkMode: action.isDarkMode,
            };
        case "new-alert":
            return {
                ...state,
                alert: {
                    open: action.open,
                    message: action.message,
                    severity: action.severity,
                },
            };
        case "close-alert":
            return {
                ...state,
                alert: {
                    open: false,
                    message: "",
                    severity: "",
                },
            };
        default:
            throw new Error();
    }
}
