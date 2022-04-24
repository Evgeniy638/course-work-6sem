const express = require('express');
const { 
    findThingById,
    findThingsByTitle,
    createNewThing,
    removeThingById,
    updateThing,
    removeThingByIdByModerator
} = require('../../db/query/thing');
const router = express.Router();
const Role = require('../../constants/roles');

/* GET thing by id */
router.get('/:thingId', async function (req, res, next) {
    const thing = await findThingById(req.params.thingId);

    if (!thing) {
        return res.status(404).json({
            messageStatus: 'NOT_FOUND_THING',
        });
    }

    res.send(thing);
});

/* GET things by title */
router.get('/', async function (req, res, next) {
    const { title } = req.query;
    const things = await findThingsByTitle(title);
    res.send(things);
});

/* POST create thing */
router.post('/', async function (req, res, next) {
    const newThing = await createNewThing({ ...req.body, creatorId: req.user.id });
    res.json(newThing);
});

/* PUT update thing */
router.put('/', async function (req, res, next) {
    const thing = await findThingById(req.body.id);

    if (!thing) {
        return res.status(404).json({
            messageStatus: 'NOT_FOUND_THING',
        });
    }

    if (thing.creatorId !== req.user.id) {
        return res.status(403).json({
            messageStatus: 'NOT_ALLOWED_THIS_USER',
        });
    }

    await updateThing(req.body);
    res.json({ message: 'ok' });
});

/* DELETE thing by id */
router.delete('/:thingId', async function (req, res, next) {
    const thing = await findThingById(req.params.thingId);

    if (!thing) {
        return res.status(404).json({
            messageStatus: 'NOT_FOUND_THING',
        });
    }

    if (thing.creatorId !== req.user.id) {
        if (req.user.role === Role.MODERATOR) {
            await removeThingByIdByModerator(req.params.thingId)
            return res.json({ message: 'ok' });
        }

        return res.status(403).json({
            messageStatus: 'NOT_ALLOWED_THIS_USER',
        });
    }

    await removeThingById(req.params.thingId);
    res.json({ message: 'ok' });
});

module.exports = router;
