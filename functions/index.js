// const functions = require("firebase-functions");
const admin = require('firebase-admin');

/* // For production:
const serviceAccount = require('./sdk.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "word-morph-image.appspot.com",
});

const bucket = admin.storage().bucket();
*/


// For development:
admin.initializeApp()