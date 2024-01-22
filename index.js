import express from "express";
import dotenv from "dotenv";
import router from "./src/routers/index.router";

dotenv.config()
const { HTTP_PORT } = process.env

const app = express()
app.use()







app.listen(HTTP_PORT, () => {
    console.log(`Server running on http//:localhost:${HTTP_PORT}`
    )})