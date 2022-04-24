const express = require('express');
const { findUserById } = require('../../db/query/user');
const router = express.Router();

/* GET user avatar by id */
router.get('/:userId/avatar', async function (req, res, next) {
    const user = await findUserById(req.params.userId);

    if (!user) {
        return res.status(404).json({
            messageStatus: 'NOT_FOUND_USER',
        });
    }

    res.json({
        avatarSrc: user.avatarSrc ? user.avatarSrc : null,
    });
});

module.exports = router;
