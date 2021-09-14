export async function getLoremPicsumBlob(url) {
    const blob =
        await fetch(url)
        .then(r => r.blob())
        .catch(err => console.log(err));
    console.log(blob)
    return blob
}