export function getTextWidthFromInnerHTML(text, fontSize, fontFamily) {
    const textSpan = document.createElement("span");
    document.body.appendChild(textSpan);

    textSpan.style.font = fontFamily;
    textSpan.style.fontSize = fontSize;
    textSpan.style.height = "auto";
    textSpan.style.width = "auto";
    textSpan.style.position = "absolute";
    textSpan.style.whiteSpace = "no-wrap";
    textSpan.innerHTML = text;
    const width = Math.ceil(textSpan.clientWidth);
    document.body.removeChild(textSpan);

    //adjust for capital letters.
    const adjustment = text.replace(/[^A-Z]/g, "").length * 0.5;

    return width + adjustment;
}
