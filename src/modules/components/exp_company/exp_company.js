const $ = require('jquery');
const artT = require('art-template');

const Exp = require('../exp/exp.js');
const Panel = require('../panel/panel.js');
const Config = require('../../lib/config.js');

require('./exp_company.less');

const Module = (() => {
  const _e = {
    ele: {
      wrapper: '#exp-company',
      content: '#exp-company .content'
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
    Exp.init(_e.ele, Config.expCompany);
    // setConfig(Config.expTech)
    if (data.show) {
      Panel.init(_e.ele.wrapper, data);
      render();
    }
  }

  function setConfig(opt) {
    $.extend(data, opt)
  }


  function render() {
    const tpl = require('./exp_company.tpl')();
    const tplRender = artT.compile(tpl);
    $(_e.ele.content).html(tplRender(data));
  }

  return _e;
})();

module.exports = Module;