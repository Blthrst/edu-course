import express from "express"
import bodyParser from "body-parser"
import "dotenv/config.js"

import createUser from "./middlewares/createUser.js"
import deleteUser from "./middlewares/deleteUser.js"
import putUser from "./middlewares/putUser.js"
import getUser from "./middlewares/getUser.js"
import getUsers from "./middlewares/getUsers.js"

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/users/", async (req, res) => {
    await getUsers(req, res)
})

app.get("/users/:userId", async (req, res) => {
    await getUser(req, res)
})

app.post("/users/", async (req, res) => {
    await createUser(req, res)
})

app.put("/users/", async (req, res) => {
    await putUser(req, res)
})

app.delete("/users/", async (req, res) => {
    await deleteUser(req, res)
})

app.listen(process.env.PORT)