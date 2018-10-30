const $ = require('jquery');
const artT = require('art-template');

require('./title.less');

// 常量
const NAME = 'Title';
const VERSION = '0.1.0';
const ClassName = {
};
const Selector = {};
const ENUM = {};

class Title {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  static render(data) {
    const tpl = require('./title.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender(data);
  }
}

module.exports = Title;