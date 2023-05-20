import { nanoid } from "nanoid"
import { deleteUrlQuery, getUrlByIdQuery, getUrlQuery, postUrlQuery, postVisit, updateVisitQuery, urlFromUser } from "../repositories/urls.repository.js"

export async function postUrl(req, res) {
    const {url} = req.body
    const session = res.locals.session
    const userId = session.userId
    const shortUrl = nanoid()
    try {
        await postUrlQuery(url, userId, shortUrl)
        const crUrl = await getUrlQuery(shortUrl)
        const shortId = crUrl.rows[0].id
        await postVisit(shortId)
        res.status(201).send({id: shortId, shortUrl})
    } catch(err) {
        res.status(500).send(err.message)
    }
}

export async function getUrlById(req, res) {
    const { id } = req.params
    try {
        const url = await getUrlByIdQuery(id)
        if(!url) return res.sendStatus(404)
        res.status(200).send(url.rows[0])
    } catch(err) {
        res.status(500).send(err.message)
    }
}

export async function getShort(req, res) {
    const { shortUrl } = req.params
    try {
        const short = await getUrlQuery(shortUrl)
        if(!short.rowCount) return res.sendStatus(404)
        const shortId = short.rows[0].id
        const visits = await getVisit(shortId)
        const updtVisit = visits.rows[0].visit + 1
        await updateVisitQuery(updtVisit, shortId)
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