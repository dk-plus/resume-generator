const $ = require('jquery');
const artT = require('art-template');

require('./list.less');

// 常量
const NAME = 'List';
const VERSION = '0.1.0';
const ClassName = {
};
const Selector = {};
const ENUM = {};

class List {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  static render(data) {
    const tpl = require('./list.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender(data);
  }
}

module.exports = List;