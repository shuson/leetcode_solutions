jest.dontMock('../solutions/371-sum-of-two-integers');

describe('remove 0 from array and put to behind', function () {
    var sum = require('../solutions/371-sum-of-two-integers');

    it('returns 0 when pass 0, 0', function () {
        expect(sum(0,0)).toBe(0)
    });

    it('returns 1 when pass 1, 0', function () {
        expect(sum(1,0)).toBe(1)
    });

    it('returns 1 when pass 0, 1', function () {
        expect(sum(0,1)).toBe(1)
    });

    it('returns 2 when pass 1, 1', function () {
        expect(sum(1,1)).toBe(2)
    });
});
