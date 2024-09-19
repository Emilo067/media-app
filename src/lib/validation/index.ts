import * as z from 'zod'

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Слишком короткий'}),
    username: z.string().min(2, {message: 'Слишком короткий'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Пароль должен содержать минимум 8 символов'})
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Пароль должен содержать минимум 8 символов'})
})

