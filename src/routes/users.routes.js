import {Router} from "express"
import { tokenValidate } from "../middlewares/token.middleware.js"
import { getUser } from "../controllers/users.controller.js"

const userRouter = Router()

userRouter.get("/users/me", tokenValidate, getUser)

export default userRouter