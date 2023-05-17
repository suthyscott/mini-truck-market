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
const {register, login} = require('./controllers/auth.js')
const {isAuthenticated} = require('./middleware/isAuthenticated.js')


Users.hasMany(Trucks)
Trucks.belongsTo(Users)

app.post('/api/register', register)
app.post('/api/login', login)

app.get('/api/trucks', isAuthenticated, getAllTrucks)


// sequelize.sync({force:true})
sequelize.sync()
    .then(() => app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`)))
    .catch(err => console.log(err))