const express = require('express')
const router = express.Router();
const {signup} = require('../controllers/signup')
const {signupMiddleWare} = require('../middleware/signup')
router.post(
    '/', 
    signupMiddleWare,
    signup
    )
module.exports = router