var mapValues = require('@timelaps/n/map/values');
var returnsFirst = require('@timelaps/returns/first');
var isObject = require('@timelaps/is/object');
var isNil = require('@timelaps/is/nil');
module.exports = function (obj) {
    return isNil(obj) || !isObject(obj) ? obj : mapValues(obj, returnsFirst);
};