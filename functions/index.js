const functions = require('firebase-functions')
const express = require('express')
const admin = require('firebase-admin')
admin.initializeApp()
// Routes
const scream = require('./routes/scream')
const screams = require('./routes/screams')
const signup = require('./routes/signup')
const login = require('./routes/login')
const uploadImage = require('./routes/uploadImage')
const addUserDetails = require('./routes/addUserDetails')
const getUserDetails = require('./routes/getUserDetails')
const getScream = require('./routes/getScream')
const comment = require('./routes/comment')
const getLike = require('./routes/getLike')
const getUnlike = require('./routes/getUnlike')
const app = express()
// screams
app.use('/scream', scream)
app.use('/screams', screams)
app.use('/scream', getScream)
// delete
app.use('/like', getLike)
app.use('/unlike', getUnlike)
app.use('/comment', comment)

// user
app.use('/signup', signup)
app.use('/login', login)
app.use('/user', addUserDetails)
app.use('/user', getUserDetails)
app.use('/user/image', uploadImage)

exports.api = functions.region('asia-south1').https.onRequest(app)
