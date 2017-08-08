var keys = require('@timelaps/n/keys');
module.exports = function objectEmpty(obj) {
    return !keys(obj).length;
};