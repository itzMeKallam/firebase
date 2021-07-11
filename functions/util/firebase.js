const firebase = require('firebase')
const admin = require('firebase-admin')
const db = admin.firestore()

const firebaseConfig = {
    apiKey: "AIzaSyD4X-1diCx9xsdJdHBG_rgtP0HgmYw14ew",
    authDomain: "learning-7d9c6.firebaseapp.com",
    projectId: "learning-7d9c6",
    storageBucket: "learning-7d9c6.appspot.com",
    messagingSenderId: "274926071373",
    appId: "1:274926071373:web:dbe51db6f69c7961c6b604",
    measurementId: "G-BJRPDEM70Q"
  };

  firebase.initializeApp(firebaseConfig)


module.exports = {firebase, db, firebaseConfig, admin}