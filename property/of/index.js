var noop = require('@timelaps/fn/noop'),
    isNil = require('@timelaps/is/nil'),
    bindWith = require('@timelaps/fn/bind/with'),
    get = require('@timelaps/n/get');
module.exports = function propertyOf(object) {
    return isNil(object) ? noop : bindWith(get, [null, object]);
};