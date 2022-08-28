const express = require('express')
const TagsController = require('../controllers/TagsController')
const authenticateToken = require('../core/middlewares/authenticate')
const validate = require('../core/middlewares/validate')
const router = express.Router()
const TagValidations = require('../validations/TagValidations')


router.get("/", TagsController.getAll)
router.post("/create", validate(TagValidations.addValidation), authenticateToken, TagsController.add)

module.exports = router