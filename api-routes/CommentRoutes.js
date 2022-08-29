const express = require('express')
const schemas = require('../validations/UserValidations')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')
const PostController = require('../controllers/PostsController')
const PostValidations = require('../validations/PostValidations')
const CommentValidations = require('../validations/CommentValidations')
const authenticateToken = require('../core/middlewares/authenticate')
const CommentsController = require('../controllers/CommentsController')



// router.get("/", CommentsController.getAll)
router.get("/bypage/:pageno/:pagesize", authenticateToken, PostController.getAllPaginated)
router.post("/create", validate(CommentValidations.addValidation), authenticateToken, CommentsController.add)
router.get("/", CommentsController.getAll)
router.get("/get-all-with-associations", CommentsController.getAllWithAssociations)

module.exports = router