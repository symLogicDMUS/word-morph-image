/*action.key is required argument*/
import { copy } from "../../helpers/copy";

export function reducer(state, action) {
    let word, url;
    const index = String(action.key);
    const indexes = Object.keys(state);
    if (!indexes.includes(index)) {
        word = "";
        url = "";
    } else {
        word = state[action.key].word;
        url = state[action.key].url;
    }
    switch (action.type) {
        case "update-pair":
            if (action.isUrl) {
                return {
                    ...state,
                    [action.key]: {
                        word: word,
                        url: action.newItem,
                    },
                };
            } else {
                return {
                    ...state,
                    [action.key]: {
                        word: action.newItem,
                        url: url,
                    },
                };
            }
        case "remove-pair":
            const pairs = copy(state);
            delete pairs[action.key];
            const newPairs = {};
            let i = -1;
            Object.keys(pairs).forEach((index) => {
                i += 1;
                newPairs[i] = pairs[index];
            });
            return newPairs;
        default:
            throw new Error();
    }
}
