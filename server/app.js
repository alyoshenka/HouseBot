const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./router')

// Constants

const app = express()
const port = 8000

const cluster_name = 'notablecluster'
const db_name = 'housebot'

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${cluster_name}.sm4hi.mongodb.net/${db_name}?retryWrites=true&w=majority`

const connectToDatabase = async() => {
    try {
        await mongoose.connect(uri)
    } catch (err) {
        console.log('error ', err)
    }
}
connectToDatabase()


// Middleware

app.use(express.json())
app.use(cors())

app.use('/notifications', router)

// Routes

app.get('/', (req, res) => {
    res.send('Hello World')
})


// App
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})