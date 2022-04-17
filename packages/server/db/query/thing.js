const Thing = require('../models/Thing');

/**
 * @param {string} title
 */
async function findThingsByTitle(title) {
    return Thing.find({
        title: { "$regex": new RegExp(title), "$options": "i" },
    }).sort({ createTime: -1 }).exec();
}

async function findThingById(id) {
    return Thing.findById(id).exec();
}

/**
 * @param {{
 *  title: string;
 *  description: string;
 *  avatarSrc?: string;
 *  creatorId: string;
 * }} thingObj 
 */
async function createNewThing(thingObj) {
    const thing = new Thing(thingObj);
    return thing.save();
}

/**
 * @param {{
 *  id: string;
 *  title: string;
 *  description: string;
 *  avatarSrc?: string;
 * }} thingObj 
 */
async function updateThing(thingObj) {
    const { id, title, description, avatarSrc } = thingObj;

    return Thing.updateOne({ 
        _id: id,
    }, {
        title,
        description,
        avatarSrc,
    });
}

async function removeThingById(id) {
    return Thing.remove({ _id: id }).exec();
}

module.exports = {
    findThingById,
    findThingsByTitle,
    createNewThing,
    removeThingById,
    updateThing,
};
