jest.dontMock('../solutions/217-find-duplicate');

describe('find duplicate in array', function () {
    var find = require('../solutions/217-find-duplicate');

    it("returns true when given [1,2,3,3,5]", function () {
        expect(find([1, 2, 3, 3, 5])).toBe(true);
    });

    it("returns false when given [1,2,3,5]", function () {
        expect(find([1, 2, 3, 5])).toBe(false);
    });

    it("returns false when given []", function () {
        expect(find([])).toBe(false);
    });
});
