import express from "express"
import {config} from "./config.mjs"
import { connectDB } from "./db/database.mjs"
import postsRouter from "./router/posts.mjs"
import authRouter from "./router/auth.mjs"

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
app.use("/post", postsRouter)

app.use((req, res) => {
    console.log("123")
    res.sendStatus(404)
})


connectDB().then(() => {
    app.listen(config.host.port, () => {
     console.log("DB/웹 서버 실행 중 ...")
    })
}).catch(console.error)
