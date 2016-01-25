jest.dontMock('../solutions/258-add-digits');

describe('add digits', function () {
    var addDigits = require('../solutions/258-add-digits');

    it('shows 2 when giving 38', function () {
        expect(addDigits(38)).toBe(2);
    });

    it('shows 8 when giving 8', function () {
        expect(addDigits(8)).toBe(8);
    });
});
