const express = require('express')
const router = express.Router();
const {scream} = require('../controllers/scream')
const {Auth} = require('../middleware/isAuth')
router.post(
    '/', 
    Auth,
    scream
    )
module.exports = router