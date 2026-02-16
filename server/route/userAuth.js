const express = require('express')
const User = require('./../model/User')
const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const a = await User.findOne({ email }).select('password');
    if (!a) res.json({ msg: "Invalid Email Address" });
    else if (a.password != password)
        res.json({
            msg: "Login Successfull",
            id: a._id
        });
    else if (a.password == password)
        res.json({
            msg: "Login Successful",
            id: a._id
        });


})

module.exports = router;