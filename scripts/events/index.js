const eventEmitter = require("./eventEmitter")

const listenEvents = () => {
    eventEmitter.on("send_email", (data) => {
        console.log('event received with data : ' + data)
    })
}
module.exports = listenEvents