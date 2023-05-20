import { Router } from "express"
import signRouter from "./sign.routes.js"
import userRouter from "./users.routes.js"
import rankRouter from "./rank.routes.js"

const router = Router()

router.use(signRouter)
router.use(userRouter)
router.use(rankRouter)

export default router