const express = require('express')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')
const UserValidations = require('../validations/UserValidations')
const { authenticateToken } = require('../core/middlewares')


router.get("/", authenticateToken, UsersController.getAll)
router.post("/register", UsersController.add)
router.post("/reset-password", validate(UserValidations.resetPasswordValidation), UsersController.resetPassword)
module.exports = router