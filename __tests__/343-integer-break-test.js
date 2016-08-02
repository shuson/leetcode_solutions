jest.dontMock('../solutions/343-integer-break');

describe('Integer Break', function () {
    var nums = require('../solutions/343-integer-break');

    it('return 1 given 2', function () {
        expect(nums(2)).toEqual(1);
    });

    it('return 0 given 1', function () {
        expect(nums(1)).toEqual(1);
    });

    it('return 18 given 8', function () {
        expect(nums(8)).toEqual(18);
    });

    it('return 36 given 10', function () {
        expect(nums(10)).toEqual(36);
    });

    it('return 8748 given 25', function () {
        expect(nums(25)).toEqual(8748);
    });
});