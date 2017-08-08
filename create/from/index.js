var merge = require('../../assign');
var create = require('..');
var isFunction = require('@timelaps/is/function');
module.exports = function createFrom(Constrktr) {
    if (isFunction(Constrktr)) {
        return new Constrktr;
    } else {
        return create(Constrktr);
    }
};