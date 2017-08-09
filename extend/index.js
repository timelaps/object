var merge = require('../merge');
module.exports = function (args, deep, stack) {
    var length = args && args.length,
        index = 1,
        first = 0,
        base = args ? (args[0] || {}) : base;
    if (base) {
        for (; index < length; index++) {
            merge(base, args[index], deep, stack);
        }
    }
    return base;
};