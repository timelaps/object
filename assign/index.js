var forOwn = require('@timelaps/n/for/own');
module.exports = Object.assign || assign;

function assign(obj1, obj2) {
    forOwn(obj2, function (value, key) {
        obj1[key] = value;
    });
    return obj1;
}