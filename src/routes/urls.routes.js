import {Router} from 'express'
import { tokenValidate } from '../middlewares/token.middleware.js'
import { deleteUrl, getShort, getUrlById, postUrl } from '../controllers/urls.controller.js'
import validateSchema from '../middlewares/validateSchema.middleware.js'
import { urlSchema } from '../schemas/sing.schema.js'

const urlsRouter = Router()

urlsRouter.post("/urls/shorten", validateSchema(urlSchema) ,tokenValidate, postUrl)
urlsRouter.get("/urls/:id", getUrlById)
urlsRouter.get("/urls/open/:shortUrl", getShort)
urlsRouter.delete("/urls/:id",tokenValidate, deleteUrl)

export default urlsRouter