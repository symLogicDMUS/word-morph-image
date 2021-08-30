/*action.key is required argument*/
import {copy} from "../../helpers/copy";

export function reducer(state, action) {
    let word, url;
    if (!Object.keys(state).includes(action.key)) {
        word = "";
        url = null;
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
                    }
                }
            } else {
                return {
                    ...state,
                    [action.key]: {
                        word: action.newItem,
                        url: url,
                    }
                }
            }
        case "remove-pair":
            const pairs = copy(state);
            delete pairs[action.key]
            return pairs;
        default:
            throw new Error();
    }
}