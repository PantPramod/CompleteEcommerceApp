const express = require('express');
const router = express.Router()
const user = require('../../modal/user')

router.post('/', async (req, res) => {
    try {
        const savedUsers =  new user({ ...req.body });
        const result = await savedUsers.save();
        console.log(result)
        res.status(201).send("User Created")
    } catch (err) {
        console.log(err)
        res.status(500).send("Some Error")
    }
})

module.exports = router