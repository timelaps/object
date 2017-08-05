// module.exports = require('array/base/each')(require('iterate/own'), require('array/for/each'));
var forIn = require('../in');
var has = require('../../has');
module.exports = function forOwn(object, fn) {
    forIn(object, function (value, key) {
        if (has(object, key)) {
            fn(value, key, object);
        }
    });
};