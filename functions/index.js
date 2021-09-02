const functions = require("firebase-functions");
const admin = require('firebase-admin');


/* //For production:
const serviceAccount = require('./sdk.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "word-morph-image.appspot.com",
});
*/

//For development:
admin.initializeApp()

const bucket = admin.storage().bucket();

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send(bucket.ref());
});