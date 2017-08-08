var get = require('@timelaps/n/get');
module.exports = function (string) {
    return function (object) {
        return get(object, string);
    };
};