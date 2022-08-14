const jwt = require("jsonwebtoken");

function getToken(payload, expiration) {
    return jwt.sign(
        payload,
        process.env.APP_KEY,
        {
            expiresIn: expiration,    // expires in 1 day
        }
    );
}

module.exports = {
    getToken,
}