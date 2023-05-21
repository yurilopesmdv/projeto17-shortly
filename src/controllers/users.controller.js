import { getUrlsUser, getUserById, visitCountQuery } from "../repositories/users.repository.js";

export async function getUser(req, res) {
    const session = res.locals.session
    try {
        const vresult = await visitCountQuery(session.userId)
        const [visitCount] = vresult.rows
        const uresult = await getUrlsUser(session.userId)
        const userResult = await getUserById(session.userId)
        const name = userResult.rows[0].name

        res.status(200).send({
            id: session.userId,
            name: name,
            visitCount: visitCount.sum || 0,
            shortenedUrls: uresult.rows,

        })
    } catch (err) {
        res.status(500).send(err.message);
      }
}