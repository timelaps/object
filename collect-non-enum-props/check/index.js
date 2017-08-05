var ENUM_BUG = require('../../keys/enum-bug');
var collectNonEnumProps = require('../');
module.exports = check;

function check(obj, keys) {
    // Ahem, IE < 9.
    if (ENUM_BUG) {
        collectNonEnumProps(obj, keys);
    }
    return keys;
}