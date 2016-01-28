jest.dontMock('../solutions/169-majority-element');

describe('find majority of array', function () {
    var find = require('../solutions/169-majority-element');

    it('returns 3 when passing [3,3,2]', function () {
        expect(find([3, 3, 2])).toBe(3);
    });

    it('returns 3 when passing [3]', function () {
        expect(find([3])).toBe(3);
    });

    it('returns 3 when passing [1, 3, 3, 5, 3, 2, 3]', function () {
        expect(find([1, 3, 3, 5, 3, 2, 3])).toBe(3);
    });
});
