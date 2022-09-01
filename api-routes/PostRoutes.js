const express = require('express')
const schemas = require('../validations/UserValidations')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')
const PostController = require('../controllers/PostsController')
const PostValidations = require('../validations/PostValidations')
const authenticateToken = require('../core/middlewares/authenticate')

const afterResponse = require('../core/middlewares/afterResponse')
const cacheMW = require('../core/middlewares/cache')



router.get("/", cacheMW, PostController.getAll)
router.get("/get-with-associations", authenticateToken, cacheMW, PostController.getAllWithAssociations)

router.get("/bypage/:pageno/:pagesize", authenticateToken, PostController.getAllPaginated)
router.get("/get-all-of-current-user", authenticateToken, cacheMW, PostController.getAllOfCurrentUser)
router.post("/create", validate(PostValidations.addValidation), authenticateToken, PostController.add)
router.post("/add-tag-to-post", authenticateToken, validate(PostValidations.addTagToPostValidation), PostController.AddTagToPost)

module.exports = router