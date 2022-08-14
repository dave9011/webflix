function isAdmin(req, res, next) {
    if (req.user.isAdmin) {
        next();
    }
    else {
        res.status(403).json('You are not allowed to perform that action.');
    }
}

module.exports = isAdmin;