const router = require("express").Router();
const User = require("../models/User");
const { encryptAES } = require("../services/encryption-service");

function scrubUserCredentials(user) {
    const { password, ...userData } = user._doc;

    return userData;
}

router.get('/find/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (! user) {
            res.status(404).json('User not found.');

            return;
        }

        res.status(200).json(scrubUserCredentials(user));
    } catch (err) {
        res.status(500).json(err);
    }
});

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

    // only allow admins to update the admin field
    if (! req.user.isAdmin) {
        delete req.body.isAdmin;
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

router.delete('/:id', async (req, res) => {
    if (req.user.id !== req.params.id && ! req.user.isAdmin) {
        res.status(403).json('You are not authorized to make that action.');

        return;
    }

    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json('User has been deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/stats', async (req, res) => {
    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ]);

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    if (! req.user.isAdmin) {
        res.status(403).json('You are not authorized to make that action.');

        return;
    }

    const query = req.query.latest;

    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();

        res.status(200).json(users.map(scrubUserCredentials));
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;