import { deleteUrlQuery, getUrlByIdQuery, urlFromUser } from "../repositories/urls.repository.js"

export async function postUrl(req, res) {
    const {url} = req.body
    const {userId} = res.locals.session
    try {

    } catch(err) {
        res.status(500).send(err.message)
    }
}

export async function getUrlById(req, res) {
    try {

    } catch(err) {
        res.status(500).send(err.message)
    }
}

export async function getShort(req, res) {
    try {

    } catch(err) {
        res.status(500).send(err.message)
    }
}

export async function deleteUrl(req, res) {
    const {id} = req.params
    const {userId} = res.locals.session
    try {
        const urlIsFromUser = await urlFromUser(userId, id)
        if(!urlIsFromUser) return res.sendStatus(401)
        const urlExists = await getUrlByIdQuery(id)
        if(!urlExists) return res.sendStatus(404)

        await deleteUrlQuery(id)
    } catch(err) {
        res.status(500).send(err.message)
    }
}