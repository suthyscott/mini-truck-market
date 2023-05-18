require('dotenv').config()
const {SECRET} = process.env
const {Users} = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const createToken = (username, id) => {
    return jwt.sign({
        username,
        id
    }, SECRET, {
        expiresIn: '2 days'
    })
}

module.exports = {
    register: async (req, res) => {
        try {
            const {email, password} = req.body
            let foundUser = await Users.findOne({where: {email}})
            if(foundUser){
                res.status(400).send('That email is already in use.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await Users.create({email, hashedPassword: hash})

                const token = createToken(newUser.email, newUser.id)
                const exp = Date.now() + 1000 * 60 * 60 * 48

                res.status(200).send({
                    email: newUser.email,
                    userId: newUser.id,
                    token,
                    exp
                })
            }
        } catch(theseHands) {
            console.log(theseHands)
            res.status(400).send('Error registering')
        }
    },
    login: async (req, res) => {
        try {   
            const {password, email} = req.body
            let foundUser = await Users.findOne({where: {email}})

            if(foundUser){
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPassword)

                if(isAuthenticated){
                    const token = createToken(foundUser.email, foundUser.id)
                    const exp = Date.now() + 1000 * 60 * 60 * 48

                    res.status(200).send({
                        email: foundUser.email,
                        userId: foundUser.id,
                        token,
                        exp
                    })
                } else {
                    res.status(400).send('That password is incorrect')
                }
            } else {
                res.status(400).send('There is no user with that email.')
            }

        } catch(theseHands) {
            console.log(theseHands)
            res.status(400).send('Error registering')
        }
    }
}