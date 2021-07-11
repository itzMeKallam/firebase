const express = require('express')
const router = express.Router();
const {comment} = require('../controllers/comment')
const {Auth} = require('../middleware/isAuth')
router.post(
    '/:screamId', 
    Auth,
    comment
    )
module.exports = router