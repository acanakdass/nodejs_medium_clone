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
            req.body.userId = req.user.id
            const result = await this.service.add(req.body)
            res.json(result)
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    AddTagToPost = async (req, res, next) => {
        try {
            const result = await PostService.AddTagToPost(req.body)
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
    getAllWithAssociations = async (req, res, next) => {
        try {
            var result = await PostService.getAllWithAssociations()
            res.locals.dataToCache = JSON.stringify(result)
            res.json(result);
            next()
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
}
module.exports = new PostController()