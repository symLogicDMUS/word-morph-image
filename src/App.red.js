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
        default:
            throw new Error();
    }
}
