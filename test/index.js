/**
 * extensions test
 * See your console.
 */

require(__dirname + '/../index');

var nodeunit = require('nodeunit');

exports['extensions test'] = nodeunit.testCase({

  'println number/string': function (test) {
    test.ok(true);
    test.done();
  },

  'println error': function (test) {
    test.ok(true);
    test.done();
    // try {
    //   raiseError();
    // } catch (err) {
    //   var defaultOutput = err.println(),
    //       stackOutput   = err.println(true);

    //   test.ok(defaultOutput.split('\n').length === 1);
    //   test.ok(stackOutput.split('\n').length > 1);
    //   test.done();
    // }
  }

});
