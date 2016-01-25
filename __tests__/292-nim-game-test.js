jest.dontMock('../solutions/292-nim-game');

describe('nim game', function () {
    var nim = require('../solutions/292-nim-game');

    it('8 stones in the heap, you will lose.', function () {
        expect(nim(8)).toBe(false);
    });

    it('13 stones in the heap, you will win.', function () {
        expect(nim(13)).toBe(true);
    });
});
