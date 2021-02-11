const { Router } = require('express')
const { check, validationResult } = require("express-validator")
const Admin = require('../models/Admin')
const router = Router()



router.post(
    '/login_admin',
    [
        check('name', 'Not correct email').exists(),
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
            const { name, password } = req.body

            const user = await Admin.findOne({ name })

            res.json({ userId: user._id })

        } catch (e) {
            res.status(500).json({ message: "Server error" })
        }
    })

module.exports = router
