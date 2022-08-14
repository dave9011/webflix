const jwt = require("jsonwebtoken");

function verify(req, res, next) {
    const authTokenHeader = req.headers.authorization;

    if (! authTokenHeader || ! authTokenHeader.startsWith("Bearer ")) {
        res.status(401).json('You are not authenticated.');

        return;
    }

    const token = authTokenHeader.substring(7, authTokenHeader.length);

    jwt.verify(token, process.env.APP_KEY, (err, user) => {
        if (err) {
            res.status(403).json('Token is not valid');
        }
        else {
            // add our user to the request object
            req.user = user;

            // continue the request
            next();
        }
    });
}

module.exports = verify;
