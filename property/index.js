var get = require('../get');
module.exports = function (string) {
    return function (object) {
        return get(object, string);
    };
};