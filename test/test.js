var assert = require('assert');

console.log("#########", process.env.NON_SECRET_KEY);
console.log("@@@@@@@@@", process.env.SECRET_KEY);

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});