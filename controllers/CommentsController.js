const BaseController = require("../core/controllers/BaseController");
const CommentService = require("../services/CommentService");
const Messages = require("../constants/Messages");

class CommentsController extends BaseController {
    constructor() {
        super(CommentService)
    }
    getAllWithAssociations = async (req, res, next) => {
        try {
            const result = await CommentService.getAllWithAssociations()
            res.json(result)
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
}
module.exports = new CommentsController()