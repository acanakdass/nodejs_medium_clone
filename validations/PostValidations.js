const Joi = require("joi");

const addValidation = Joi.object({
    title: Joi.string().required().min(3),
    description: Joi.string().required().min(3),
    content: Joi.string()
})
const updateValidation = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required().min(3),
    description: Joi.string().required().min(3)
})
module.exports = {
    addValidation,
    updateValidation
} 