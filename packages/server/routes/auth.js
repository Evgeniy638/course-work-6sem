const express = require('express');
const { findUserById } = require('../db/query/user');
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const { avatarSrc, fullName, id, login, role } = await findUserById(req.user.id);
    res.send({
        avatarSrc,
        fullName,
        id,
        login,
        role,
    });
});

module.exports = router;
