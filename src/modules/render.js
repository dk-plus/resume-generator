const artT = require('art-template');
const $ = require('jquery');
var data = require('./data.json');

const _opt = {
  html: '#main'
}
var $html = $(_opt.html);

const render = (function(){

  function init() {
    console.log('render');
    renderHtml(data);
  }

  function renderHtml(data) {
    const tpl = require('../view/index.tpl')();
    const renderer = artT.compile(tpl);
    var obj = {
      data: data
    }
    var html = renderer(obj);
    $html.html(html);
  }

  return {
    init: init
  }
})();
module.exports = render;