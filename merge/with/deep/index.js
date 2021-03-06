var isObject = require('@timelaps/is/object');
var contains = require('@timelaps/n/contains');
var returnBaseType = require('@timelaps/returns/base-type');
var mergeWith = require('../');
var isUndefined = require('@timelaps/is/undefined');
var isStrictlyEqual = require('@timelaps/is/strictly-equal');
module.exports = deepMergeWithCustomizer;

function deepMergeWithCustomizer(val1, val2, key, o1, o2, stack) {
    var result, garbage;
    if (isObject(val2)) {
        if (!contains(null, stack, val2)) {
            stack.push(val2);
            if (!isObject(val1)) {
                val1 = returnBaseType(val2);
            }
            if (!isUndefined(val2) && !isStrictlyEqual(val1, val2)) {
                o1[key] = mergeWith(val1, val2, deepMergeWithCustomizer, stack);
            }
            garbage = stack.pop();
        }
    } else {
        o1[key] = val2;
    }
}