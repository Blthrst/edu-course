import model from "../model/index.js";

async function getUsers(req, res) {
    const users = await model.getUsersAsync()

    if (users) res.json(users)
    
    res.status(500).end()
}

export default getUsers