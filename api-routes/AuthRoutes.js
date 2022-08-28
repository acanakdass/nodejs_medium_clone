const express = require('express')
const schemas = require('../validations/UserValidations')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')
const UserValidations = require('../validations/UserValidations')
const AuthController = require('../controllers/AuthController')


router.get("/", UsersController.getAll)
router.post("/register", validate(UserValidations.registerValidation), AuthController.register)
router.post("/login", validate(UserValidations.loginValidation), AuthController.login)
module.exports = router