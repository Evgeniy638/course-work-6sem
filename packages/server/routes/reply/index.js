const express = require('express');
const {
    findRepliesByReviewId,
    createNewReply,
    findReplyById,
    updateReply,
    removeReplyById,
} = require('../../db/query/reply');
const router = express.Router();

/* GET replies by reviewId */
router.get('/', async function (req, res, next) {
    const { reviewId } = req.query;
    const replies = await findRepliesByReviewId(reviewId);
    res.send(replies);
});

/* POST create reply */
router.post('/', async function (req, res, next) {
    const newReply = await createNewReply({ ...req.body, creatorId: req.user.id });
    res.json(newReply);
});

/* PUT update reply */
router.put('/', async function (req, res, next) {
    const reply = await findReplyById(req.body.id);

    if (!reply) {
        return res.status(404).json({
            messageStatus: 'NOT_FOUND_REPLY',
        });
    }

    if (reply.creatorId !== req.user.id) {
        return res.status(403).json({
            messageStatus: 'NOT_ALLOWED_THIS_USER',
        });
    }

    await updateReply(req.body);
    res.json({ message: 'ok' });
});

/* DELETE thing by id */
router.delete('/:replyId', async function (req, res, next) {
    const reply = await findReplyById(req.params.replyId);

    if (!reply) {
        return res.status(404).json({
            messageStatus: 'NOT_FOUND_REPLY',
        });
    }

    if (reply.creatorId !== req.user.id) {
        return res.status(403).json({
            messageStatus: 'NOT_ALLOWED_THIS_USER',
        });
    }

    await removeReplyById(req.params.replyId);
    res.json({ message: 'ok' });
});

module.exports = router;
