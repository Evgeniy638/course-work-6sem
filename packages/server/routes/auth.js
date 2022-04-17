const express = require('express');
const { findUserById } = require('../db/query/user');
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const user = await findUserById(req.user.id);
    res.send(user);
});

module.exports = router;
