const $ = require('jquery');
const render = require('./modules/render');
const resetCss = require('./view/reset_css');

require('./view/index.less');

render.init();
resetCss.init();

console.log($);