const { Router } = require('express')
const { check, validationResult } = require("express-validator")
const Teacher = require('../models/Teacher')
const Student = require('../models/Student')
const router = Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post(
   '/register',
    [
        check('email', 'Not correct email').isEmail(),
        check('password', 'Password too small, min lenght 6').isLength({ min: 6 }),
        check('login', 'Name is required!').isLength({ min: 1 })
    ],
   async (req, res) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect data!"
                })
            }
            const {history, login, email, password} = req.body

            if(history === "/teacher_register"){

                const candidate = await Teacher.findOne({ email })
    
                if (candidate) {
                    res.status(400).json({ message: "This user already exist!" })
                } else {
    
                    const hashpassword = await bcrypt.hash(password, 12);
    
                    const user = new Teacher({
                        email,
                        name: login,
                        password: hashpassword,
                    })
                    await user.save()
    
                    res.status(200).json({ message: "User has been created!" })
                }
            }else{
                const candidate = await Student.findOne({ email })
    
                if (candidate) {
                    res.status(400).json({ message: "This user already exist!" })
                } else {
    
                    const hashpassword = await bcrypt.hash(password, 12);
    
                    const user = new Student({
                        email,
                        name: login,
                        password: hashpassword,
                    })

                    await user.save()
    
                    res.status(200).json({ message: "User has been created!" })
                }
            }

        } catch (e) {
            res.status(500).json({ message: "Server error" })
        }
})

router.post(
    '/login',
    [
        check('email', 'Not correct email').isEmail().normalizeEmail(),
        check('password', 'Enter a password').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect data!"
                })
            }
            const { email, password, history } = req.body

            const bcryptPassANdCreateToken = async (user) =>{
                const isMatch = await bcrypt.compare(password, user.password)

                if (!isMatch) {
                    return res.status(400).json({ message: "Not valid password!" })
                }
                const token = jwt.sign(
                    { userId: user.id },
                    config.get('jwtSecret'),
                    { expiresIn: "1h" }
                )
    
                res.json({ token, userId: user.id })
            }

            if(history ==="/teacher_login"){
                const user = await Teacher.findOne({ email })
                if (!user) {
                    return res.status(400).json({ message: "User was not found!" })
                }
                bcryptPassANdCreateToken(user)
            }else{
                const user = await Student.findOne({ email })
                if (!user) {
                    return res.status(400).json({ message: "User was not found!" })
                }
                bcryptPassANdCreateToken(user)
            }
          

        } catch (e) {
            res.status(500).json({ message: "Server error" })
        }
    })

module.exports = router;