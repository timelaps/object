module.exports = match;
var keys = require('../keys');
var toObject = require('@timelaps/to/object');
var forEachEnd = require('../for/each/end');
var toBoolean = require('@timelaps/hacks/to-boolean');

function match(object, attrs, extent_) {
    var extent = extent_ || defaultExtent,
        keysResult = keys(attrs),
        obj = toObject(object);
    return !toBoolean(forEachEnd(keysResult, function iterates(key) {
        return !extent(attrs[key], obj[key]);
    }) + 1);
}

function defaultExtent(a, b) {
    return a === b;
}