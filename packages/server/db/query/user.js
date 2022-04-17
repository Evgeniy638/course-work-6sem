const User = require('../models/User');

async function findByLogin(login) {
    return User.findOne({ login }).exec();
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
    findByLogin,
    createNewUser,
};
