jest.dontMock('../solutions/26-remove-duplicates-from-sorted-array');

describe('26. Remove duplicates from sorted array', function () {
    var func = require('../solutions/26-remove-duplicates-from-sorted-array');

    it('returns 0 when passing []', function () {
        expect(func([])).toBe(0);
    });

    it('returns 1 when passing [1,1]', function () {
        expect(func([1,1])).toBe(1);
    });

    it('returns 2 when passing [1,1,2]', function () {
        expect(func([1,1,2])).toBe(2);
    });

    it('returns 3 when passing [1,1,2,2,3]', function () {
        expect(func([1,1,2,2,3])).toBe(3);
    });
});