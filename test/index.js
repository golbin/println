/**
 * extensions test
 * See your console.
 */

require(__dirname + '/../index');

var nodeunit = require('nodeunit');

exports['extensions test'] = nodeunit.testCase({

  'println number/string': function (test) {
    var number = 1;

    var output = number.println(),
        output2 = ("string " + number).println();

    test.ok(output !== 1);
    test.ok(output === '1');
    test.ok(output2 === 'string 1');
    test.done();
  },

  'println error': function (test) {
    try {
      raiseError();
    } catch (err) {
      var defaultOutput = err.println(),
          stackOutput   = err.println(true);

      test.ok(defaultOutput.split('\n').length === 1);
      test.ok(stackOutput.split('\n').length > 1);
      test.done();
    }
  }

});
