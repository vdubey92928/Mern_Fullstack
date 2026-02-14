const express = require('express')
const User = require('./../model/User')
const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    const a = await User.findOne({ email }).select('password');
    res.json(a)
})

module.exports = router;