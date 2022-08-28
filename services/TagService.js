const BaseService = require("../core/services/BaseService")
const Models = require("../models")

class TagService extends BaseService {
    constructor() {
        super(Models.TagModel)
    }
}


module.exports = new TagService()