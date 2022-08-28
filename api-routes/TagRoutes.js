const express = require('express')
const TagsController = require('../controllers/TagsController')
const router = express.Router()


router.get("/", TagsController.getAll)
router.post("/create", TagsController.add)

module.exports = router