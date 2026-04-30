const express = require("express")
const authController = require("../controllers/auth.controller.js")

const router = express.Router();


router.post('/register',authController.registerUser)
router.post('/loggin',authController.loginUser)

module.exports = router;