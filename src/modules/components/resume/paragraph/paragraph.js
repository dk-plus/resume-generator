const $ = require('jquery');
const artT = require('art-template');

require('./paragraph.less');

// 常量
const NAME = 'Paragraph';
const VERSION = '0.1.0';
const ClassName = {
};
const Selector = {};
const ENUM = {};

class Paragraph {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  static render(data) {
    const tpl = require('./paragraph.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender(data);
  }
}

module.exports = Paragraph;