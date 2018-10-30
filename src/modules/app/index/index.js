const Render = require('./render.js');
const Utils = require('../../lib/utils.js');

!(() => {
  console.log('%cresume-generator', `
    background: #1890ff;
    padding: 0 5px;
    border-radius: 5px 5px 0 0;
    font-size: 14px;
    color: #fff;
  `);
  console.log('%c-release-2.0-pro', `
    background: #314659;
    padding: 0 5px;
    border-radius: 0 0 5px 5px;
    font-size: 14px;
    color: #fff;
  `);

  Render.init();

})();