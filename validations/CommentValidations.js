const Joi = require("joi");

const addValidation = Joi.object({
    text: Joi.string().required().min(3),
    postId: Joi.number().required()
})
const updateValidation = Joi.object({
    // id: Joi.number().required(),
    // title: Joi.string().required().min(3),
    // description: Joi.string().required().min(3)
})
module.exports = {
    addValidation,
    // updateValidation
} 