var b = require('@timelaps/batterie');
var createFrom = require('.');
b.describe('createFrom', function () {
    b.expect(createFrom).toBeFunction();
    b.it('creates new object prototypes', function (t) {
        var proto = {
            a: 1,
            b: 2
        };
        var prototype = createFrom(proto);
        t.expect(proto.a).toEqual(prototype.a);
        t.expect(proto.b).toEqual(prototype.b);
        t.expect(proto).notToEqual(prototype);
    }, 3);
});