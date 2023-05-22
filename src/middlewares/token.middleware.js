import { isLogged } from "../repositories/sign.repository.js";

export async function tokenValidate(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "");
   
    if(!token) return res.sendStatus(401)
    try {
        const {rows: sessions} = await isLogged(token)
        const [session] = sessions
        if(!session) return res.sendStatus(401)
        res.locals.session = session
        next()
    }catch (err) {
    res.status(500).send(err.message);
  }
}