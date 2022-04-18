const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    avatarSrc: { type: String },
    raiting: { type: Number },
    creatorId: { type: String, required: true },
    createTime: { type: Date, required: true, default: Date.now },
}, {versionKey: false});

thingSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

thingSchema.set('toJSON', {
    virtuals: true
});

const Thing = mongoose.model("things", thingSchema);

module.exports = Thing;
