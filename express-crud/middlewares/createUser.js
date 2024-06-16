import model from "../model/index.js";

async function createUser(req, res) {
    const {username} = req.body

    const user = await model.createUserAsync(username)

    if (user) res.status(200).end()
    
    res.status(500).end()
}

export default createUser