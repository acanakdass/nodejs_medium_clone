const req = require("express/lib/request");
const { Op } = require("sequelize");
const BaseController = require("../core/controllers/BaseController");
const { ErrorResult, SuccessDataResult } = require("../core/helpers/results");
const { PostModel } = require("../models/PostModel");
const { sequelize } = require("../models/index");

const PostService = require("../services/PostService");
const TagService = require("../services/TagService");
const { TagModel } = require("../models");
const Messages = require("../constants/Messages");


class PostController extends BaseController {
    constructor() {
        super(PostService)
    }
    add = async (req, res, next) => {
        try {
            console.log("-----------------------------------req.user--------------------------------------------------------------------")
            console.log(req.user)
            console.log("-----------------------------------req.user--------------------------------------------------------------------")
            req.body.userId = req.user.id
            console.log(req.body)
            const result = await this.service.add(req.body)
            res.json(result)
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    getAllOfCurrentUser = async (req, res, next) => {
        try {
            var posts = await PostService.getAllByUserId(req.user.id)
            res.json(posts);
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    getWithUser = async (req, res, next) => {
        try {
            var posts = await PostService.getWithUser()
            res.json(posts);
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
}
module.exports = new PostController()