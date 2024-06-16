import model from "../model/index.js";

async function deleteUser(req, res) {
    const {id} = req.body

    const user = await model.deleteUserAsync(id)

    if (user) res.status(200).end()
    
    res.status(500).end()
}

export default deleteUser