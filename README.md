This is a sandbox I created to work with authentication tools and implement features and best-practices.

Running this repo for your own use:

1) Clone this repo
2) Create an account on Firebase.com if you don't already have one
3) Set up the 'Authentication' DB with 'Email/Password' enabled
3) Use the SDK provided configuration settings by doing the following:
    a) In the firebase settings there is an SDK snippet to paste into your project
    b) Paste that code into a file in src/config/fire.js
4) $ npm start

******************************************
Example of your src/config.fire.js file
******************************************

import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "YOUR KEY HERE",
    authDomain: "YOUR DOMAIN HERE",
    databaseURL: "YOUR DB DOMAIN HERE",
    projectId: "YOUR PROJECT ID HERE",
    storageBucket: "YOUR STORAGE BUCKET URL",
    messagingSenderId: "YOUR MESSAGING SENDER ID HERE",
    appId: "YOUR APP ID HERE",
    measurementId: "YOUR MEASUREMENT ID HERE"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
