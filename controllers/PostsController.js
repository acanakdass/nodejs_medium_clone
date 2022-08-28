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
    // getAll = async (req, res, next) => {
    //     // sequelize.getQueryInterface().dropAllTables().then(res => {
    //     //     console.log(res)
    //     // })
    //     // sequelize.getQueryInterface().showAllTables().then((tableObj) => {
    //     //     console.log('// Tables in database', '==========================');
    //     //     console.log(tableObj);
    //     // }).catch((err) => {
    //     //     console.log('showAllSchemas ERROR', err);
    //     // })
    //     // sequelize.getQueryInterface().showAllSchemas().then(res => console.log(res))

    //     const result = await PostService.getAll({ include: TagModel })
    //     res.json(result)
    // }
    // add = async (req, res, next) => {
    //     try {
    //         const result = await PostService.add(req.body)
    //         const categories = await TagService.getAll({ where: { id: { [Op.or]: req.body.Tag_ids } } })
    //         await result.addCategories(categories)
    //         res.json(result)
    //     } catch (error) {
    //         console.log(error)
    //         next(error.message)
    //     }
    //     // console.log(req.body)
    // }
}
const setCategoriesToPostModel = new Promise((resolve, reject) => {
    try {

    } catch (error) {

    }
})


module.exports = new PostController()