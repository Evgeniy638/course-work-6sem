const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    text: { type: String, required: true },
    raiting: { type: Number, required: true },
    creatorId: { type: String, required: true },
    thingId: { type: String, required: true },
    createTime: { type: Date, required: true, default: Date.now },
    isRemoveModerator: { type: Boolean, required: true, default: false },
}, {versionKey: false});

reviewSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

reviewSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
});

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
