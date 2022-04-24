const bcrypt = require('bcryptjs');
const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const router = express.Router();

const { findUserByLogin } = require('../db/query/user');

const notCorrectLoginOrPassword = {
    message: `Not correct login or password`,
    messageStatus: 'NOT_CORRECT_LOGIN_OR_PASSWORD',
};

/* POST login */
router.post('/', async function (req, res, next) {
    const secretKey = process.env.SECRET_KEY;

    try {
        const { login, password } = req.body;

        const userFromDb = await findUserByLogin(login);

        if (!userFromDb) {
            return res.status(400).json(notCorrectLoginOrPassword);
        }

        const isValidPassword = await bcrypt.compare(password, userFromDb.password);

        if (!isValidPassword) {
            return res.status(400).json(notCorrectLoginOrPassword);
        }

        const token = jsonwebtoken.sign(
            { id: userFromDb.id, role: userFromDb.role },
            secretKey,
        );

        return res.json({
            token,
            user: {
                id: userFromDb.id,
                login: userFromDb.login,
                fullName: userFromDb.fullName,
                avatarSrc: userFromDb.avatarSrc,
                role: userFromDb.role,
            },
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
