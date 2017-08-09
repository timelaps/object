module.exports = merge;
var shallowMergeWithCustomizer = require('./with/shallow');
var deepMergeWithCustomizer = require('./with/deep');
var mergeWith = require('./with');

function merge(obj1, obj2, deep) {
    return mergeWith(obj1, obj2, deep ? deepMergeWithCustomizer : shallowMergeWithCustomizer);
}