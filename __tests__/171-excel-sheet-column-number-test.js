jest.dontMock('../solutions/171-excel-sheet-column-number');

describe('Excel Sheet Column Number', function () {
    var nums = require('../solutions/171-excel-sheet-column-number');

    it('return 0 given ""', function () {
        expect(nums("")).toEqual(0);
    });

    it('return 1 given "A"', function () {
        expect(nums("A")).toEqual(1);
    });

    it('return 26 given "z"', function () {
        expect(nums("z")).toEqual(26);
    });

    it('return 28 given "AB"', function () {
        expect(nums("AB")).toEqual(28);
    });

    it('return 702 given "zz"', function () {
        expect(nums("zz")).toEqual(702);
    });
});
