const { redisClient } = require('../../core/loaders/redis')

class RedisService {
    SetStringKeyValueAsync = (key, value) => {
        return new Promise((resolve, reject) => {
            redisClient.set(key, value)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
    SetStringKeyValueAsyncEx = (key, value, exMiliseconds) => {
        return new Promise((resolve, reject) => {
            redisClient.SETEX(key, exMiliseconds, value)
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
}
module.exports = new RedisService()
