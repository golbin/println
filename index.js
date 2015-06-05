module.exports = process.env.PRINTLN_COV ?
  require('./extensions-cov/index') :
  require('./extensions/index');
