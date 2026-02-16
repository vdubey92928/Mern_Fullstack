const express = require('express')
const router = express.Router()
const multer = require('multer')
const User = require('../model/User')

const uploads = () => {
    multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, '/uploads')

        },
        filename: (req, res, cb) => {
            cb(null, Date.now() + "image")
        }
    })
}

router.post('/:id', uploads, async (req, res) => {
    const id = req.params
    const { picture } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { picture: picture }, { new: true })

    res.json("file uploaded successfully")
})

module.exports = router;