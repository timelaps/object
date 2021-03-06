module.exports = mergeWith;
var keys = require('@timelaps/n/keys');
var returnsBaseType = require('@timelaps/returns/base-type');
var forEach = require('@timelaps/n/for/each');

function mergeWith(o1_, o2, customizer, _stack) {
    var key, i = 0,
        instanceKeys = keys(o2),
        stack = _stack || [],
        l = instanceKeys.length,
        o1 = o1_;
    if (l) {
        o1 = o1 || returnsBaseType(o2);
        forEach(instanceKeys, merge);
    }
    return o1;

    function merge(key) {
        customizer(o1[key], o2[key], key, o1, o2, stack);
    }
}