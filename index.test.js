var b = require('@timelaps/batterie');
var object = require('.');
b.describe('object', function () {
    b.expect(object).toBeObject();
});