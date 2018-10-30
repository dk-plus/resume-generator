const $ = require('jquery');
const artT = require('art-template');

require('./avater.less');

// 常量
const NAME = 'Avater';
const VERSION = '0.1.0';
const ClassName = {
};
const Selector = {};
const ENUM = {};

class Avater {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  static render(data) {
    const tpl = require('./avater.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender(data);
  }
}

module.exports = Avater;