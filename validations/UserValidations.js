const Joi = require("joi");

const addValidation = Joi.object({
    full_name: Joi.string().required().min(3),
    password: Joi.string().required().min(5),
    email: Joi.string().email().required().min(10),
})
const loginValidation = Joi.object({
    email: Joi.string().email().required().min(10),
    password: Joi.string().required().min(5),
})
const resetPasswordValidation = Joi.object({
    email: Joi.string().email().required().min(10),
})

module.exports = {
    addValidation,
    loginValidation,
    resetPasswordValidation
}