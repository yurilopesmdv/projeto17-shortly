import {Router} from "express"
import { getRank } from "../controllers/rank.controller.js"

const rankRouter = Router()

rankRouter.get("/ranking", getRank)

export default rankRouter