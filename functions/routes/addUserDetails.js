const express = require('express')
const router = express.Router();
const {addUserDetails} = require('../controllers/addUserDetails')
const {Auth} = require('../middleware/isAuth')
const {addUserDetailsMW} = require('../middleware/addUserDetails')
router.post(
    '/', 
    Auth,
    addUserDetailsMW,
    addUserDetails
    )
module.exports = router