import model from "../model/index.js";

async function getUser(req, res) {
    console.log(req.params)
    const {userId} = req.params

    const user = await model.getUserByIdAsync(userId)

    if (user) res.json(user)
    
    res.status(500).end()
}

export default getUser