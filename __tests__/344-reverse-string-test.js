jest.dontMock('../solutions/344-reverse-string');

describe('Merge sorted arrays', function () {
    var reverse = require('../solutions/344-reverse-string');

    it('return "" when passing ""', function () {
        expect(reverse('')).toEqual('');
    });

    it('return a when passing a', function () {
        expect(reverse('a')).toEqual('a');
    });

    it('return ba when passing ab', function () {
        expect(reverse('ab')).toEqual('ba');
    });

    it('return cba when passing abc', function () {
        expect(reverse('abc')).toEqual('cba');
    });
});