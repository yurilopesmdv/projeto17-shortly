export async function getUser(req, res) {
    const session = res.locals.session
    try {
        const user = await userQuery(session.userId)
        res.status(200).send(user.rows[0])
    } catch (err) {
        res.status(500).send(err.message);
      }
}