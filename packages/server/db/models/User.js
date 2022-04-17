const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    avatarSrc: { type: String }
}, {versionKey: false});

userSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true
});

const User = mongoose.model("users", userSchema);

module.exports = User;
