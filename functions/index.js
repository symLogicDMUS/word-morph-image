const functions = require("firebase-functions");
const admin = require('firebase-admin');


/* //For production:
const serviceAccount = require('./sdk.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "word-morph-image.appspot.com",
});

const bucket = admin.storage().bucket();

*/


// For development:
admin.initializeApp()


// const unsplash = require("./unsplash.json")
// exports.getUnsplashImg = functions.https.onRequest(() => {
//     const result = fetch("https://api.unsplash.com/photos/random/?client_id=FACImHv41SdvWpGX2dWopBS_38yovOMPXCcMJhyB8Xc").then(result => {
//         console.log(result.json())
//     })
// });
