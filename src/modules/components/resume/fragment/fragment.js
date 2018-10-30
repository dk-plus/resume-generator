const $ = require('jquery');
const artT = require('art-template');

require('./fragment.less');

// 常量
const NAME = 'Fragment';
const VERSION = '0.1.0';
const ClassName = {
};
const Selector = {};
const ENUM = {};

class Fragment {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  static render(data) {
    const tpl = require('./fragment.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender(data);
  }
}

module.exports = Fragment;