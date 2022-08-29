const eventEmitter = require("./eventEmitter")
const emailHelper = require("../../core/helpers/emailSender/emailHelpers")
const listenEvents = () => {
    eventEmitter.on("send_email", (data) => {
        console.log('event received with data : ' + data)
        console.log("EMail sent (fake)")
        //emailHelper.sendEmail(data).catch(console.error)
    })
}
module.exports = listenEvents