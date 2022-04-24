const express = require('express');
const {
    findReviewsByThingId,
    createNewReview,
    findReviewById,
    updateReview,
    removeReviewById,
    findReviewByCreatorId,
    removeReviewByIdByModerator
} = require('../../db/query/review');
const router = express.Router();
const Role = require('../../constants/roles');

/* GET reviews by thingId */
router.get('/', async function (req, res, next) {
    const { thingId } = req.query;
    const reviews = await findReviewsByThingId(thingId);
    res.send(reviews);
});

/* POST create review */
router.post('/', async function (req, res, next) {
    const newReview = await createNewReview({ ...req.body, creatorId: req.user.id });
    res.json(newReview);
});

/* PUT update review */
router.put('/', async function (req, res, next) {
    await updateReview(req.body);
    const review = await findReviewById(req.body.id);

    if (!review) {
        return res.status(404).json({
            messageStatus: 'NOT_FOUND_REVIEW',
        });
    }

    if (review.creatorId !== req.user.id) {
        return res.status(403).json({
            messageStatus: 'NOT_ALLOWED_THIS_USER',
        });
    }

    res.json({ message: 'ok' });
});

/* DELETE thing by id */
router.delete('/:reviewId', async function (req, res, next) {
    const review = await findReviewById(req.params.reviewId);

    if (!review) {
        return res.status(404).json({
            messageStatus: 'NOT_FOUND_REVIEW',
        });
    }

    if (review.creatorId !== req.user.id) {
        if (req.user.role === Role.MODERATOR) {
            await removeReviewByIdByModerator(req.params.reviewId)
            return res.json({ message: 'ok' });
        }

        return res.status(403).json({
            messageStatus: 'NOT_ALLOWED_THIS_USER',
        });
    }

    await removeReviewById(req.params.reviewId);
    res.json({ message: 'ok' });
});

module.exports = router;
