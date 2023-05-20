import { isLogged } from "../repositories/sign.repository.js";

export async function tokenValidate(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "");
    if(!token) return res.sendStatus(401)
    try {
        const session = await isLogged(token)
        if(!session) return res.sendStatus(401)
        res.locals.session = session.rows[0]
        next()
    }catch (err) {
    res.status(500).send(err.message);
  }
}