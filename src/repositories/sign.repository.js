import {db} from "../connection/database.connection.js"

export async function checkEmail(email) {
    const response = await db.query(`SELECT * FROM users WHERE email=$1;`, [email])
    return response
}

export async function signUpQuery(name, email, hash) {
    const response = await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, hash])
    return response
}

export async function signInQuery(userId, token) {
    const response = await db.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2);`, [userId, token])
    return response
}

export async function isLogged(token) {
    const response = await db.query(`SELECT * FROM sessions WHERE token=$1;`,  [token])
}