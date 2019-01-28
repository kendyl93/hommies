//keys.js figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in prod
  module.exports = require('./prod');
} else {
  //dev
  module.exports = require('./dev');
}
