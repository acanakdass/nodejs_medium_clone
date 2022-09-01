const redis = require('redis')
const redisClient = redis.createClient()


const connectRedis = () => {

    redisClient.on('error', (err) => console.log(err))
    if (redisClient.isOpen == false) {

        redisClient.connect().then(res => {
            console.log('Connected to Redis..')
        }).catch(err => {
            console.log('Error on connection to Redis..')
            console.log(err)
        })
    }
}

module.exports = { connectRedis, redisClient }