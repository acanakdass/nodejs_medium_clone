const RedisService = require('../services/RedisService')
const afterResponse = async (req, res, next) => {
    console.log('*----------------------------------this is after respponse middleware----------------------------------')
    console.log(req.originalUrl)
    console.log(res.locals.dataToCache)
    let value = res.locals.dataToCache
    await RedisService.SetStringKeyValueAsync(req.originalUrl, res.locals.dataToCache)
    next();
}
module.exports = afterResponse 