import {specialChars} from "./specialChars";

export function containsSpecialCharacters(string) {
    for (let i = 0; i < specialChars.length; i++) {
        if (string.includes(specialChars[i])) {
            return true;
        }
    }
    return false;
}