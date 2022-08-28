const BaseController = require("../core/controllers/BaseController");
const { TagModel } = require("../models");
const PostModel = require("../models/PostModel");
const TagService = require("../services/TagService");

class TagsController extends BaseController {
    constructor() {
        super(TagService)
    }
    getAll = async (req, res, next) => {
        try {
            const result = await TagService.getAll()
            res.json(result)
        } catch (error) {
            console.log(error)
            next(error.message)
        }
    }
}

module.exports = new TagsController()