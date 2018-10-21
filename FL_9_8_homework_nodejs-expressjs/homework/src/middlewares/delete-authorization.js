const Joi = require('joi');
/*
function validation() {
    const schema = {
        brand: Joi.string().required(),
        model: Joi.string().required(),
        engineVolume: Joi.string().required(),
        year: Joi.string().required(),

    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        return res.status(400).send(result.error);
    }
}
*/

exports.checkAuthorization = (req, res, next) => {

    if (req.headers.authorization !== 'X-Password qwerty') {
        return res.status(401).send('Unauthorized');
    }

    next();
};
