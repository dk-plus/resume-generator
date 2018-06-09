const $ = require('jquery');
const artT = require('art-template');

const Panel = require('../panel/panel.js');
const Config = require('../../lib/config.js');

require('./tag.less');

const Module = (() => {
  const _e = {
    ele: {
      wrapper: '#tag',
      content: '#tag .content'
    }
  };

  let data = {
    title: 'hahah',
    data: {
      name: 'dk'
    }
  };

  _e.init = () => {
    // console.log('panel');
    setConfig(Config.tag)
    if (data.show) {
      Panel.init(_e.ele.wrapper, data);
      render();
    }
  }

  function setConfig(opt) {
    $.extend(data, opt)
  }


  function render() {
    const tpl = require('./tag.tpl')();
    const tplRender = artT.compile(tpl);
    $(_e.ele.content).html(tplRender(data));
  }

  return _e;
})();

module.exports = Module;