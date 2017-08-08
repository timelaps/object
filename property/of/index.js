var noop = require('@timelaps/fn/noop');
var isNil = require('@timelaps/is/nil');
module.exports = function propertyOf(object) {
    return isNil(object) ? noop : propertyOf;

    function propertyOf(key) {
        return object[key];
    }
};