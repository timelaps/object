var forOwn = require('../for/own');
var passesFirstArgument = require('@timelaps/fn/first');
var bindTo = require('@timelaps/fn/bind/to');
var push = [].push;
module.exports = function values(object) {
    var collected = [];
    forOwn(object, passesFirstArgument(bindTo(push, collected)));
    return collected;
};