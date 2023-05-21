import { nanoid } from "nanoid"
import { deleteUrlQuery, getUrlByIdQuery, getUrlQuery, postUrlQuery, updateViews, urlFromUser } from "../repositories/urls.repository.js"

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
        const {rows} = await getUrlByIdQuery(id)
        if(rows.length === 0) return res.sendStatus(404)
        const [url] = rows

        delete url.userId
        delete url.createdAt
        delete url.views
        res.status(200).send(url)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

export async function getShort(req, res) {
    const { shortUrl } = req.params
    try {
        const {rows} = await getUrlQuery(shortUrl)
        if(rows.length === 0) return res.sendStatus(404)
        const [url] = rows
        await updateViews(url.id)
        res.redirect(url.url)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

export async function deleteUrl(req, res) {
    const {id} = req.params
    const {userId} = res.locals.session
    try {
        const result = await getUrlById(id)
        if(result.rowCount === 0) return res.sendStatus(404)
        const [url] = result.rows
        if(url.userId !== userId) return res.sendStatus(401)

        await deleteUrlQuery(id)
        res.sendStatus(204)
    } catch(err) {
        res.status(500).send(err.message)
    }
}