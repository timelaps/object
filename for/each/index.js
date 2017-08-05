var isArrayLike = require('@timelaps/is/array-like');
module.exports = function forEach(array, fn) {
    if (!isArrayLike(array)) return;
    for (var i = 0; i < array.length; i++) fn(array[i], i, array);
};