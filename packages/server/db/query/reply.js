const Reply = require('../models/Reply');

/**
 * @param {string} reviewId
 */
async function findRepliesByReviewId(reviewId) {
    return Reply.aggregate([
        { $match : { reviewId } },
        {
            $project: {
                '_id': 0,
                id: '$_id',
                text: 1,
                reviewId: 1,
                createTime: 1,
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
    ]).sort({ createTime: 1 }).exec();
}

async function findReplyById(id) {
    return Reply.findById(id).exec();
}

/**
 * @param {{
 *  text: string,
 *  creatorId: string,
 *  reviewId: string,
 *  createTime: number,
 * }} replyObj 
 */
async function createNewReply(replyObj) {
    const reply = new Reply(replyObj);
    return reply.save();
}

/**
 * @param {{
 *  id: string
 *  text: string,
 * }} replyObj 
 */
async function updateReply(replyObj) {
    const { id, text } = replyObj;

    return Reply.updateOne({ 
        _id: id,
    }, {
        text,
    });
}

async function removeReplyById(id) {
    return Reply.deleteOne({ _id: id }).exec();
}

module.exports = {
    findRepliesByReviewId,
    findReplyById,
    createNewReply,
    updateReply,
    removeReplyById,
};
