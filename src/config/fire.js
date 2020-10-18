import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDXlWY003pXXXHxwe7SzYt3WRk2AKWXS4U",
    authDomain: "learn-auth-a9252.firebaseapp.com",
    databaseURL: "https://learn-auth-a9252.firebaseio.com",
    projectId: "learn-auth-a9252",
    storageBucket: "learn-auth-a9252.appspot.com",
    messagingSenderId: "94102459519",
    appId: "1:94102459519:web:38b59a4ecc8cde0f20db4a",
    measurementId: "G-3F2CJL7F8F"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
