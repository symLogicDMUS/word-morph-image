export async function getLoremPicsumBlob(url) {
    const blob = await fetch(url)
        .then((r) => r.blob())
        .catch((err) => console.log(err));
    return blob;
}
