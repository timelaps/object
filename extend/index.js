var merge = require('../merge');
var forEach = require('@timelaps/n/for/each');
module.exports = function (args, deep, stack) {
    var length = args && args.length,
        base = args && args[0] || {};
    args && forEach(args.slice(1), function (arg) {
        merge(base, arg, deep, stack);
    });
    return base;
};