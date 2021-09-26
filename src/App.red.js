import { copy } from "./helpers/copy";

export function reducer(state, action) {
    let newDict; // alert
    switch (action.type) {
        case "update-text":
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                text: action.text,
            };
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
                    action: null,
                    title: null,
                    open: true,
                    severity: "success",
                    message: "Pairs added successfully!",
                    autoHideDuration: 3000,
                },
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
                    action: null,
                    title: null,
                    open: true,
                    severity: "success",
                    message: "Text saved successfully!",
                    autoHideDuration: 3000,
                },
            };
        case "remove-paragraph":
            const paragraphs = copy(state.paragraphs);
            delete paragraphs[action.title];
            return {
                ...state,
                numUpdates: state.numUpdates + 1,
                paragraphs: paragraphs,
                alert: {
                    action: null,
                    title: null,
                    open: true,
                    severity: "info",
                    message: `"${action.title}" deleted.`,
                    autoHideDuration: 3000,
                },
            };
        case "new-alert":
            return {
                ...state,
                alert: action.alert,
            };
        case "close-alert":
            return {
                ...state,
                alert: {
                    action: null,
                    title: null,
                    open: false,
                    message: "",
                    severity: "",
                },
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
