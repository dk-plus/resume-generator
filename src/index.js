/**
 * 入口文件
 * author: dkplus<dkplus@qq.com>
 */
const $ = require('jquery');
const render = require('./modules/render');
const resetCss = require('./view/reset_css');
const Config = require('./config/config');
// require('./view/index.less');
require('./themes/'+Config.theme+'/index.less');

console.log('%cresume-generator 1.0.0',"background:linear-gradient(to right,#00343F,#1db0b8);height:2rem;line-height:2rem;font-size:1rem;font-weight:bold;color:#fff;border-left:5px solid #1db0b8;border-right:3px solid #00343F;border-radius:0 0 30px 0;padding:0 10px;text-shadow:0 0 5px #000");
render.init();
resetCss.init();

// console.log($);