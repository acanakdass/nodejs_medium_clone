const Joi = require("joi");

const registerValidation = Joi.object({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    email: Joi.string().email().required().min(10),
    password: Joi.string().required().min(5),
})
const loginValidation = Joi.object({
    email: Joi.string().email().required().min(10),
    password: Joi.string().required().min(5),
})
const resetPasswordValidation = Joi.object({
    email: Joi.string().email().required().min(8),
})

module.exports = {
    registerValidation,
    loginValidation,
    resetPasswordValidation
}