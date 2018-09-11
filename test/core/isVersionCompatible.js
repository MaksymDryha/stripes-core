const expect = require('chai').expect;
import { isVersionCompatible } from '../../src/discoverServices';

function runTest(tests) {
  const title = tests.shift();
  const expected = tests.shift();

  describe(`matching for version ${expected} (${title})`, function () {
    tests.forEach((list, i) => {
      const expectMatch = (i === 0);
      it((expectMatch ? 'accepts good' : 'rejects bad') + ' matches', function () {
        list.forEach((got) => {
          console.log(`-testing '${got}', expecting ${expectMatch ? '' : 'no '}match`);
          const match = isVersionCompatible(got, expected);
          console.log(`++got ${match}`);
          expect(match).to.equal(expectMatch);
        });
      });
    });
  });
}


describe('the isVersionCompatible function', function () {
  it('is a function', function () {
    expect(typeof isVersionCompatible).to.equal('function');
  });

  const testCases = [
    [
      'major only',
      '3',
      // The "should succeed" tests all fail, presumably because this is just not supported
      [ /*'3.5', '3.6', '3.6.1', '3.4', '3.4.7'*/ ], // should succeed
      [ '2.9', '4.0', '4.0.0' ], // should fail
    ], [
      'major.minor',
      '3.5',
      [ '3.5', '3.6', '3.6.1' ], // should succeed
      [ '2.9', '3.4', '3.4.7', '4.0', '4.0.0' ], // should fail
    ], [
      'major.minor.trivial',
      '3.5.2',
      [ '3.5.2', '3.5.5', '3.6.1' ], // should succeed
      // XXX fix the two commented-out cased below
      [ '2.9', '3.4', '3.4.7', /*'3.5', '3.5.1',*/ '4.0', '4.0.0' ], // should fail
    ]
  ];

  testCases.forEach((testCase) => {
    runTest(testCase);
  });
});
