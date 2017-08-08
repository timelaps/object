module.exports = match;
var keys = require('@timelaps/n/keys');
var toObject = require('@timelaps/to/object');
var forEachEnd = require('@timelaps/n/for/each/end');
var toBoolean = require('@timelaps/hacks/to-boolean');
var isEqual = require('@timelaps/is/equal');

function match(object, attrs, extent_) {
    var extent = extent_ || isEqual,
        keysResult = keys(attrs),
        obj = toObject(object);
    return !toBoolean(forEachEnd(keysResult, function iterates(key) {
        return !extent(attrs[key], obj[key]);
    }) + 1);
}