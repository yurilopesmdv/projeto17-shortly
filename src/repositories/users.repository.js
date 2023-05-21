import { db } from "../connection/database.connection"

export function visitCountQuery(userId) {
    const response = db.query(`
        SELECT SUM(views)
            FROM shorts s
            WHERE s."userId" = $1
    ;`, [userId])
    return response
}

export async function getUrlsUser(userId) {
    const response = await db.query(`
        SELECT id, "shortUrl", url, views AS "visitCount" FROM shorts s WHERE s."userId" = $1
    ;`, [userId])
    return response
}

export async function getUserById(id) {
    const response = await db.query(`
        SELECT name, email FROM users WHERE id=$1
    ;`, [id])
    return response
}