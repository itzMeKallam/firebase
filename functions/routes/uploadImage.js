const express = require('express')
const router = express.Router();
const {uploadImage} = require('../controllers/uploadImage')
const {Auth} = require('../middleware/isAuth')

router.post(
    '/', 
    Auth,
    uploadImage
    )
module.exports = router