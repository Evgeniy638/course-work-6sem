const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { findByLogin, createNewUser } = require('../db/query/user');
const { body } = require('express-validator');

const SALT = 5;

/* POST registration */
router.post('/', 
    [
        body('login').isLength({ min: 6 }),
        body('password').isLength({ min: 6 }),
        body('fullName').isString(),
    ],
    async function (req, res, next) {
        try {
            const { login, password, fullName, avatarSrc } = req.body;

            const isBusyLogin = !!(await findByLogin(login));

            if (isBusyLogin) {
                return res.status(400).json({
                    messageStatus: 'USER_ALREADY_EXIST',
                });
            }

            const hashPassword = await bcrypt.hash(password, SALT);

            await createNewUser({
                login,
                password: hashPassword,
                fullName,
                avatarSrc,
            });

            return res.json({ messageStatus: 'USER_CREATE' });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
