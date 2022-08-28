const BaseService = require('../core/services/BaseService')
const ProjectModel = require('../models/ProjectModel')

class AuthService extends BaseService {

    getAllByCurrentUser(userId) {
        return ProjectModel.find({ user: userId }, { user: 0 })
    }
}

module.exports = new ProjectService()