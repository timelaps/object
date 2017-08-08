var forOwn = require('@timelaps/n/for/own');
module.exports = function (obj) {
    var result = {};
    forOwn(obj, function (value, key) {
        result[value] = key;
    });
    return result;
};