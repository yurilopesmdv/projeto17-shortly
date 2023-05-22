import Joi from 'joi'

export const signUpSchema = Joi.object({
    name: Joi.string().required().min(1),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    confirmPassword: Joi.ref("password"),
})

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
})

export const urlSchema = Joi.object({
    url: Joi.string().uri().required()
})