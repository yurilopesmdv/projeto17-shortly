import { db } from "../connection/database.connection"

export function userQuery(userId) {
    const response = db.query(`
        SELECT users.id, users.name, visits.visit AS "visitCount", 
            JSON_BUILD_ARRAY(
                JSON_BUILD_OBJECT(
                    "id", shorts.id,
                    "shortUrl", shorts."shortUrl",
                    "url", shorts.url,
                    "visitCount", visits.visit
                )
            ) AS "shortenedUrls"
            FROM shorts
            JOIN visits ON visits."shortId"=shorts.id
            JOIN users ON users.id=shorts."userId"
            GROUP BY users.id
    `, [userId])
    return response
}