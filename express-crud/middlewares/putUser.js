import model from "../model/index.js";

async function putUser(req, res) {
    const {updateBody} = req.body

    const user = await model.updateUserAsync(updateBody)

    if (user) res.status(200).end()
    
    res.status(500).end()
}

export default putUser