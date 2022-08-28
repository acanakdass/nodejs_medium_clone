const Joi = require("joi");

const addValidation = Joi.object({
    name: Joi.string().required(),
})
const updateValidation = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
})
module.exports = {
    addValidation,
    updateValidation
} 