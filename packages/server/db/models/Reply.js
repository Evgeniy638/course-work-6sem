const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    text: { type: String, required: true },
    creatorId: { type: String, required: true },
    reviewId: { type: String, required: true },
    createTime: { type: Date, required: true, default: Date.now },
}, {versionKey: false});

replySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

replySchema.set('toJSON', {
    virtuals: true
});

const Reply = mongoose.model("replies", replySchema);

module.exports = Reply;
