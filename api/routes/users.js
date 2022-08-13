const router = require("express").Router();
const User = require("../models/User");
const { encryptAES } = require("../services/encryption-service");

router.put('/:id', async (req, res) => {
    if (! req.user) {
        res.status(400).json('Request is empty.');

        return;
    }

    if (req.user.id !== req.params.id && ! req.user.isAdmin) {
        res.status(403).json('You are not authorized to make that action.');

        return;
    }

    if (req.body.password) {
        req.body.password = encryptAES(req.body.password);
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        );

        res.status(200 ).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;