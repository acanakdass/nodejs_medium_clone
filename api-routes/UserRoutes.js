const express = require('express')
const schemas = require('../validations/UserValidations')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')
const UserValidations = require('../validations/UserValidations')


router.get("/", UsersController.getAll)
router.post("/register", UsersController.add)
router.post("/login", validate(UserValidations.loginValidation), UsersController.login)
module.exports = router