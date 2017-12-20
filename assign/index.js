var forOwn = require('@timelaps/n/for/own');
var fromTo = require('@timelaps/n/from/to');
module.exports = Object.assign || assign;

function assign(obj1, obj2) {
    var args = arguments;
    return fromTo(function (index, memo) {
        forOwn(args[index], function (value, key) {
            memo[key] = value;
        });
        return memo;
    }, obj1, 1, args.length, 1);
}