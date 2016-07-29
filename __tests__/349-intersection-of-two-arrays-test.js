jest.dontMock('../solutions/349-intersection-of-two-arrays');

describe('349. Intersection of Two Arrays', function () {
    var inter = require('../solutions/349-intersection-of-two-arrays');

    it("return [] when pass [], []", function(){
        expect(inter([],[])).toEqual([]);
    })

    it("return [1] when pass [1], [1]", function(){
        expect(inter([1],[1])).toEqual([1]);
    })

    it("return [1] when pass [1,2], [1,1]", function(){
        expect(inter([1,2],[1,1])).toEqual([1]);
    })

    it("return [1,2] when pass [1,2,2,1], [1,1,2]", function(){
        expect(inter([1,2,2,1], [1,1,2])).toEqual([1,2]);
    })
});