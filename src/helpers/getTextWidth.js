import {isLower} from "./isLower";
import {isSpace} from "./isSpace";
import {spacePx} from "./spacePx";
import {isCapital} from "./isCapital";
import {letterSpacing} from "./spaceWidth";
import {robotoFontWidth16px} from "./robotoFontWidth16px";

export function getTextWidth(text) {
    let width = 0;
    for (let i = 0; i < text.length; i++) {
        if (isCapital(text[i])) {
            width += robotoFontWidth16px.capitals[text[i]]
        } else if (isLower(text[i])) {
            width += robotoFontWidth16px.lowers[text[i]]
        } else if (isSpace(text[i])) {
            width += spacePx;
        }
        if ( i > 0 && i < text.length-1) {
            width += letterSpacing
        }
        /* TODO: add for all other ASCII printable characters minus those not allowed in db */
    }
    width += 8;

    return width;
}