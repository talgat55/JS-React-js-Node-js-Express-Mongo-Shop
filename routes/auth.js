const {Router} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const router = Router();

/*
*  Register new user
*/
router.post(
    '/register',
    [
        check('email', 'Wrong email').isEmail(),
        check('password', 'Minimal letter password needed 6 word').isLength({min: 6})
    ]
    ,
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong inputs data'
                })
            }
            const
                {
                    email, password
                }
                    = req.body;


            const candidate = await User.findOne({email: email});
            if (candidate) {
                return res.status(400).json({message: "User exist"});
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({email: email, password: hashedPassword});
            await user.save();
            res.status(201).json({message: 'user create succesfull'})

        } catch (e) {
            res.status(500).json({message: 'Some wrong, repeat later'});
        }
});

/*
*  Login in system
*/
router.post(
    '/login',
    [
        check('email', 'Enter  email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ]
    ,
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong inputs data'
                })
            }
            const
                {
                    email, password
                }
                    = req.body;


            const userLogin = await User.findOne({email: email});
            if (!userLogin) {
                return res.status(400).json({message: "User  not exist"});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res.status(400).json({message: "Wrong password, enter again"});
            }
            const token = jwt.sign(
                {userId: user.id },
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            );

            res.json({ token, userId: user.id});

        } catch (e) {
            res.status(500).json({message: 'Some wrong, repeat later'});
        }
});


module.exports = router;
