const Review = require('../models/Review');
const Thing = require('../models/Thing');

/**
 * @param {string} thingId
 */
async function findReviewsByThingId(thingId) {
    return Review.aggregate([
        { $match : { thingId } },
        {
            $project: {
                '_id': 0,
                id: '$_id',
                text: 1,
                reviewId: 1,
                createTime: 1,
                raiting: 1,
                thingId: 1,
                creatorId: {
                    $toObjectId:"$creatorId"
                }
            },
        },
        {
            $lookup: {
                from: 'users',
                localField: 'creatorId',
                foreignField: '_id',
                as: 'user',
            },
        },
        { "$unwind": "$user" },
        {
            $project: {
                'user.password': 0,
                'user.avatarSrc': 0,
            },
        },
    ]).sort({ createTime: -1 }).exec();
}

async function findReviewById(id) {
    return Review.findById(id).exec();
}

async function updateRaiting(thingId) {
    const session = await Review.startSession();

    try {
        session.startTransaction();

        const reviews = await Review.find({ thingId }, { raiting: 1 });

        const totalSumRaiting = reviews.reduce((totalSumRaiting, { raiting }) => raiting + totalSumRaiting, 0);
        const totalRaiting = totalSumRaiting / reviews.length;

        await Thing.updateOne({
            _id: thingId,
        }, {
            raiting: totalRaiting ? totalRaiting.toFixed(1) : null,
        });

        await session.commitTransaction();
        session.endSession();
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error; 
    }
}

/**
 * @param {{
 *  text: string,
 *  raiting: number,
 *  creatorId: string,
 *  thingId: string,
 *  createTime: number,
 * }} reviewObj
 */
async function createNewReview(reviewObj) {
    const review = new Review(reviewObj);
    const savedReview = await review.save();
    updateRaiting(reviewObj.thingId);
    return savedReview;
}

/**
 * @param {{
 *  id: string
 *  text: string,
 *  raiting: number,
 * }} reviewObj
 */
async function updateReview(reviewObj) {
    const { id, text, raiting } = reviewObj;

    const review = await findReviewById(id);

    updateRaiting(review.thingId);

    return Review.updateOne({ 
        _id: id,
    }, {
        text,
        raiting,
    });
}

async function removeReviewById(id) {
    const review = await findReviewById(id);
    await Review.deleteOne({ _id: id }).exec();
    updateRaiting(review.thingId);
}

module.exports = {
    findReviewsByThingId,
    createNewReview,
    updateReview,
    removeReviewById,
    findReviewById,
};
