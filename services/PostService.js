const BaseService = require("../core/services/BaseService")
const Models = require("../models")

class PostService extends BaseService {
    constructor() {
        super(Models.PostModel)
    }
}


module.exports = new PostService()