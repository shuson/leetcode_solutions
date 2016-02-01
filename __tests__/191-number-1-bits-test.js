jest.dontMock('../solutions/191-number-1-bits');

describe('nums of 1 bits of integer', function () {
    var nums = require('../solutions/191-number-1-bits');

    it('return 2 given 3', function () {
        expect(nums(3)).toEqual(2);
    });

    it('return 0 given 0', function () {
        expect(nums(0)).toEqual(0);
    });

    it('return 1 given 4', function () {
        expect(nums(4)).toEqual(1);
    });
});
