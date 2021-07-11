const express = require('express')
const router = express.Router();
const {getUnlike} = require('../controllers/getUnlike')
const {Auth} = require('../middleware/isAuth')
router.get(
    '/:screamId', 
    Auth,
    getUnlike
    )
module.exports = router