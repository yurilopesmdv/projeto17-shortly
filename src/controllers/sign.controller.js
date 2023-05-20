import {db} from "../connection/database.connection.js"
import { checkEmail, signUpQuery } from "../repositories/sign.repository.js"
import bcrypt from "bcrypt"


export async function signUp(req, res) {
    const {name, email, password, confirmPassword} = req.body
    if(password !== confirmPassword) return res.status(422).send('Os campos password e confirmPassword devem ser iguais.')
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

}