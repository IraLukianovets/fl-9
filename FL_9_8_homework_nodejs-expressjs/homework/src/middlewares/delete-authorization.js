exports.checkAuthorization = (req, res, next) => {

    if (req.headers.authorization !== 'X-Password qwerty') {
        return res.status(401).send('Unauthorized');
    }

    next();
};
