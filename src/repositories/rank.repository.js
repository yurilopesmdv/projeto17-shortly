import { db } from "../connection/database.connection.js"

export async function rankQuery() {
    const response = await db.query(`
        SELECT users.id, users.name, COUNT(*) as "linksCount", SUM(visits.visit)
            FROM shorts
            LEFT JOIN users ON users.id = short."userId"
            LEFT JOIN visits ON visits."shortId" = short.id
            GROUP BY users.id
            ORDER BY "visitCount" DESC
            LIMIT 10;
    `)
}