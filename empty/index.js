var keys = require('../keys');
module.exports = function objectEmpty(obj) {
    return !keys(obj).length;
};