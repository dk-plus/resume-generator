var Config = require('../config/config.js');

const theme = (function () {

  var theme = 'themes/' + Config.theme + '/index.less';

  return {
    theme: theme
  }
})();

module.exports = theme;