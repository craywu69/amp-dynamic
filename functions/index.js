const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const admin = require('firebase-admin');

admin.initializeApp();

// Express Servers
const {app } = require('./fbcf-server');

// HTTP Cloud Functions
const appFunction = functions.https.onRequest(app);


module.exports = {
 appFunction
};