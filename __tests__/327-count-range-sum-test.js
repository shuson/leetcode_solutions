jest.dontMock('../solutions/327-count-range-sum');

describe('327. Count of Range Sum', function () {
    var sum = require('../solutions/327-count-range-sum');

    it("return 0 when pass nums = [-2, 5, -1], lower = 2, upper = 2,", function(){
        expect(sum([-2,5,-1],2,2)).toBe(-1);
    })

    it("return 3 when pass nums = [-2, 5, -1], lower = -2, upper = 2,", function(){
        expect(sum([-2,5,-1],-2,2)).toBe(3);
    })
});
