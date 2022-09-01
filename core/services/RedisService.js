const { redisClient } = require('../../core/loaders/redis')

class RedisService {
    SetStringKeyValueAsync = (key, value) => {
        return new Promise((resolve, reject) => {
            redisClient.set(key, value)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
    SetStringKeyValueExAsync = (key, value, exSeconds) => {
        console.log('key in redisservice: ' + key)
        console.log('key in redisservice: ' + key)
        console.log('key in redisservice: ' + key)
        console.log('key in redisservice: ' + key)
        console.log('key in redisservice: ' + key)
        console.log('key in redisservice: ' + key)
        return new Promise((resolve, reject) => {
            redisClient.SETEX('asd', exSeconds, value)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }

    SetHashMapKeyValueAsync = (key, value) => {
        return new Promise((resolve, reject) => {
            redisClient.hSet(key, value)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }


    GetHashMapValueByKeyAsync(key) {
        return new Promise((resolve, reject) => {
            redisClient.HGETALL(key).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

    GetStringValueByKeyAsync(key) {
        return new Promise((resolve, reject) => {
            redisClient.get(key).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    FlushAll() {
        return new Promise((resolve, reject) => {
            redisClient.FLUSHALL().then(res => resolve(res)).catch(err => reject(err))
        })
    }

    PublishMessageToChannel(channel, message) {
        return new Promise((resolve, reject) => {
            redisClient.PUBLISH(channel, message)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }

    AppendValueByKeyAsync(key, value) {
        return new Promise((resolve, reject) => {
            redisClient.append(key, value).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    IsExists(key) {
        return new Promise((resolve, reject) => {
            redisClient.EXISTS(key.toString())
                .then(res => {
                    resolve(res)
                }).catch(err => { console.log(err); reject(err) })
        })
    }
}
module.exports = new RedisService()
