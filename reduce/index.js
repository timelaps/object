var reduceFrom = require('@timelaps/n/reduce/from');
var generate = require('@timelaps/fn/generator/array');
var isPointer = require('@timelaps/is/pointer');
var keys = require('@timelaps/n/keys');
module.exports = reduceFrom(isPointer, function (obj) {
    return generate(keys(obj));
});