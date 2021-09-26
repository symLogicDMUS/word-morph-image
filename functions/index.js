const functions = require("firebase-functions");
const admin = require("firebase-admin");

//For development:
/*admin.initializeApp()*/

// For production:
const serviceAccount = require("./sdk.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "word-morph-image.appspot.com",
    databaseURL: "https://word-morph-image-default-rtdb.firebaseio.com",
});

const bucket = admin.storage().bucket();
const db = admin.database();

/*remove anonymous user data*/
exports.removeVisitorData = functions.pubsub
    .schedule("59 23 * * *")
    .timeZone("America/Los_Angeles")
    .onRun(async (context) => {
        await bucket.getFiles().then(async (files) => {
            await files.map(async (fileName) => {
                await bucket.file(fileName).delete();
            });
            await db.ref("/visitors").remove();
        });
    });
