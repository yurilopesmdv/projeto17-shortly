import { db } from "../connection/database.connection.js"

export async function rankQuery() {
    const response = await db.query(`
        SELECT u.id,
                 u.name,
                COUNT(s.id) AS "linksCount", 
                COALESCE(SUM(s.views), 0) AS "visitCount"
            FROM users u
            LEFT JOIN shorts s ON s."userId" = u.id
            GROUP BY u.id
            ORDER BY "visitCount" DESC
            LIMIT 10;
    ;`)
    return response
}