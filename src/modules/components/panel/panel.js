const $ = require('jquery');
const artT = require('art-template');

require('./panel.less');

const Module = (() => {
  const _e = {
    ele: {
      min: '.min',
      max: '.max',
      close: '.close',
    }
  };

  let data = {
    title: 'dkplus'
  };

  _e.init = (ele, opt) => {
    // console.log('panel');
    $.extend(data, opt);
    render(ele);
    $('body').on('click', _e.ele.min, (e) => {
      _e.min($(e.target).parents('.panel'));
    })
    $('body').on('click', _e.ele.max, (e) => {
      _e.max($(e.target).parents('.panel'));
    })
    $('body').on('click', _e.ele.close, (e) => {
      _e.close($(e.target).parents('.window-panel'));
    })
  }

  _e.min = (ele) => { 
    ele.removeClass('max-size');
  }
  _e.max = (ele) => { 
    ele.addClass('max-size');
  }
  _e.close = (ele) => {
    ele.hide();
  }

  function render(ele) {
    const tpl = require('./panel.tpl')();
    const tplRender = artT.compile(tpl);
    $(ele).html(tplRender(data));
  }

  return _e;
})();

module.exports = Module;