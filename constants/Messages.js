const BaseMessages = require("../core/constants/BaseMessages");

class Messages extends BaseMessages {

    WRONG_CREDENTIALS = () => "Username or password is wrong."
    SUCCESS_LOGIN = () => "Logged in successfuly!"
    SUCCESS_REGISTER = () => "Registered successfuly!"
    USER_EXISTS = () => "User already exists!"
}
module.exports = new Messages()