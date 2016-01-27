jest.dontMock('../solutions/242-valid-anagram');

describe('Valid anagram of two given strings', function () {
    var valid = require("../solutions/242-valid-anagram");

    it('show true when passing "abcd" and "dcba"', function () {
        expect(valid("abcd", "dcba")).toBe(true);
    });

    it('show false when passing "abcd" and "abcde"', function () {
        expect(valid("abcd", "abcde")).toBe(false);
    });

    it('show false when passing "abccd" and "abcde"', function () {
        expect(valid("abccd", "abcde")).toBe(false);
    });
});
