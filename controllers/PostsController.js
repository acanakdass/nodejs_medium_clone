const req = require("express/lib/request");
const { Op } = require("sequelize");
const BaseController = require("../core/controllers/BaseController");
const { ErrorResult } = require("../core/helpers/results");
const { PostModel } = require("../models/PostModel");
const { sequelize } = require("../models/index");

const PostService = require("../services/PostService");
const TagService = require("../services/TagService");
const { TagModel } = require("../models");


class PostController extends BaseController {
    constructor() {
        super(PostService)
    }
}
module.exports = new PostController()