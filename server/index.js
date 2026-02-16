const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const mongoDB = require('./config/db')
mongoDB()
app.use(express.json())

const userRoute = require('./route/userRoute')
const userAuth = require('./route/userAuth')
const uploadRoute = require('./route/uploadRoute')
app.use(cors());

app.use('/api/login/', userAuth)
app.use('/api/user/', userRoute)
app.use('/api/upload/', uploadRoute)

app.listen(process.env.PORT, () => {
    console.log("Server started");
})