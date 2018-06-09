const $ = require('jquery');
const artT = require('art-template');

const Panel = require('../panel/panel.js');
const Config = require('../../lib/config.js');

require('./exp.less');

const Module = (() => {
  const _e = {
    ele: {
      wrapper: '#exp',
      content: '#exp .content'
    }
  };

  let data = {
    title: 'hahah',
    data: {
      name: 'dk'
    }
  };

  _e.init = (ele, opt) => {
    // console.log('panel');
    $.extend(_e.ele, ele);
    setConfig(opt)
    if (data.show) {
      Panel.init(_e.ele.wrapper, data);
      render();
    }
  }

  function setConfig(opt) {
    $.extend(data, opt)
  }


  function render() {
    const tpl = require('./exp.tpl')();
    const tplRender = artT.compile(tpl);
    $(_e.ele.content).html(tplRender(data));
  }

  return _e;
})();

module.exports = Module;