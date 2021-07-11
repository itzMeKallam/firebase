const express = require('express')
const router = express.Router();
const {getUserDetails} = require('../controllers/getUserDetails')
const {Auth} = require('../middleware/isAuth')
router.get(
    '/', 
    Auth,
    getUserDetails
    )
module.exports = router