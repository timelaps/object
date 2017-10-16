var b = require('@timelaps/batterie');
var objectReduce = require('./');
b.describe('object/reduce', function () {
    b.expect(objectReduce).toBeFunction();
    b.it('reduces over pointers', function (t) {
        debugger;
        var reduced = objectReduce({
            a: 1,
            b: 2,
            c: 3
        }, function (memo, value) {
            memo.push(value);
            return memo;
        }, []);
        t.expect(reduced).toEqual([1, 2, 3]);
    });
});