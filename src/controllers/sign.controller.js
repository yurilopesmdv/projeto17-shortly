import { checkEmail, signInQuery, signUpQuery } from "../repositories/sign.repository.js"
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"


export async function signUp(req, res) {
    const {name, email, password} = req.body
    try {
        const emailExists = await checkEmail(email)
        if(emailExists.rowCount > 0) return res.sendStatus(409)
        const hash = bcrypt.hashSync(password, 10)

        await signUpQuery(name, email, hash)
        
        return res.sendStatus(201)
    } catch(err) {
        res.status(500).send(err.message)
    }
    
}

export async function signIn(req, res) {
    const {email, password} = req.body
    try {
        const user = await checkEmail(email)
        const passwordIsValid = bcrypt.compareSync(password, user.rows[0].password)
        if(user.rowCount === 0 || !passwordIsValid) {
            return res.sendStatus(401)
        }
        const token = uuid()
        const userId = user.rows[0].id
        await signInQuery(userId, token)
        res.status(200).send({token})
    }catch(err) {
        res.status(500).send(err.message)
    }
}