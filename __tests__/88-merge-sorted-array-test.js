jest.dontMock('../solutions/88-merge-sorted-array');

describe('Merge sorted arrays', function () {
    var merge = require('../solutions/88-merge-sorted-array');

    it('return [1] when passing [1], []', function () {
        expect(merge([1], 1, [], 0)).toEqual([1]);
    });

    it('return [1] when passing [], [1]', function () {
        expect(merge([], 0, [1], 1)).toEqual([1]);
    });

    it('return [1,2,3,4,5] when passing [1,2], [3,4,5]', function () {
        expect(merge([1, 2], 2, [3, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
    });
});
