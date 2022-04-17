const User = require('../models/User');

async function findUserByLogin(login) {
    return User.findOne({ login }).exec();
}

async function findUserById(id) {
    return User.findById(id).exec();
}

/**
 * @param {{
 *  login: string,
 *  password: string,
 *  fullName: string,
 *  avatarSrc?: string;
 * }} userObj 
 */
async function createNewUser(userObj) {
    const user = new User(userObj);
    await user.save();
}

module.exports = {
    findUserByLogin,
    createNewUser,
    findUserById,
};
