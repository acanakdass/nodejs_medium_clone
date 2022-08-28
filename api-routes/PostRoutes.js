const express = require('express')
const schemas = require('../validations/UserValidations')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')
const PostController = require('../controllers/PostsController')
const PostValidations = require('../validations/PostValidations')



router.get("/", PostController.getAll)
router.post("/create", validate(PostValidations.addValidation), PostController.add)

module.exports = router