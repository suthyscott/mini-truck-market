const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {SERVER_PORT} = process.env
const {getAllTrucks} = require('./controllers/trucks.js')
const {sequelize} = require('./util/database.js')
const {Users} = require('./models/users.js')
const {Trucks} = require('./models/trucks.js')

app.get('/api/trucks', getAllTrucks)


sequelize.sync()
    .then(() => app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`)))
    .catch(err => console.log(err))