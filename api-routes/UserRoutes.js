const express = require('express')
const schemas = require('../validations/UserValidations')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')
const UserValidations = require('../validations/UserValidations')
const { authenticateToken } = require('../core/middlewares')


router.get("/", authenticateToken, UsersController.getAll)
router.post("/register", UsersController.add)
module.exports = router