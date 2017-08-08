module.exports = createFrom;
var merge = require('../../assign');
var create = require('..');
var isFunction = require('@timelaps/is/function');

function createFrom(Constrktr) {
    if (isFunction(Constrktr)) {
        return new Constrktr;
    } else {
        return create(Constrktr);
    }
}