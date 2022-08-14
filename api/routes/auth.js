const router = require("express").Router();
const User = require("../models/User");
const { decryptAES, encryptAES } = require("../services/encryption-service");
const { getToken } = require("../services/auth-service");

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: encryptAES(req.body.password),
    });

    try {
        const user = await newUser.save();

        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });

        if (! user) {
            res.status(401).json('Wrong username or password');

            return;
        }

        const originalPassword = decryptAES(user.password);

        if (originalPassword !== req.body.password) {
            res.status(401).json('Wrong username or password');

            return;
        }

        const accessToken = getToken(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            '1d'    // expires in 1 day
        );

        const { password, ... info } = user._doc;

        res.status(200).json({ ...info, accessToken });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;