import {db} from "../connection/database.connection.js"

export async function postUrlQuery(url, shortUrl, userId) {
    const response = await db.query(`
        INSERT INTO shorts (url, "shortUrl", "userId") VALUES ($1, $2, $3);
    `, [url, shortUrl, userId])
    return response
}

export async function getUrlQuery(shortUrl) {
    const response = await db.query()
    return response
}

export async function getUrlByIdQuery(id) {
    const response = await db.query(`SELECT * FROM shorts WHERE id=$1;`, [id])
    return response
}

export async function deleteUrlQuery(id) {
    const response = await db.query(`DELETE FROM shorts WHERE id=$1;`, [id])
    return response
}

export async function urlFromUser(userId, id) {
    const response = await db.query(`SELECT * FROM shorts WHERE "userId"=$1 AND id=$2;`, [userId, id])
    return response
}