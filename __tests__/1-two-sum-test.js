jest.dontMock('../solutions/1-two-sum');

describe('find two sum from array', function () {
    var find = require('../solutions/1-two-sum');

    it('return [1,2] when pass [2,3] and 5', function () {
        expect(find([2, 3], 5)).toEqual([1, 2]);
    });

    it('return [2,3] when pass [5,2,3] and 5', function () {
        expect(find([5, 2, 3], 5)).toEqual([2, 3]);
    });

    it('return [1,3] when pass [1,2,3,4,5] and 4', function () {
        expect(find([1, 2, 3, 4, 5], 4)).toEqual([1, 3]);
    });

    it('return [1,2] when pass [2,2,3,4,5] and 4', function () {
        expect(find([2, 2, 3, 4, 5], 4)).toEqual([1, 2]);
    });

    it('return [1,2] when pass [5,1,3,6,2] and 6', function () {
        expect(find([5, 1, 3, 6, 2], 6)).toEqual([1, 2]);
    });

    it('return [1,4] when pass [0,1,3,0,2] and 0', function () {
        expect(find([0, 1, 3, 0, 2], 0)).toEqual([1, 4]);
    });

    it('return [1,4] when pass [6,1,3,0,2] and 6', function () {
        expect(find([6, 1, 3, 0, 2], 6)).toEqual([1, 4]);
    });

    it('return [1,4] when pass [0,1,3,6,2] and 6', function () {
        expect(find([0, 1, 3, 6, 2], 6)).toEqual([1, 4]);
    });

    it('return [3,5] when pass [-1,-2,-3,-4,-5] and -8', function () {
        expect(find([-1, -2, -3, -4, -5], -8)).toEqual([3, 5]);
    });

    it('return [1,3]when pass [-3,4,3,90] and 0', function () {
        expect(find([-3, 4, 3, 90], 0)).toEqual([1, 3]);
    });
});
