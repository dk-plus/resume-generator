const $ = require('jquery');
const artT = require('art-template');

require('./key_value_map.less');

// 常量
const NAME = 'KeyValueMap';
const VERSION = '0.1.0';
const ClassName = {
};
const Selector = {};
const ENUM = {};

class KeyValueMap {
  // 构造函数
  constructor(option) {
    this.option = option;
  }

  static render(data) {
    const tpl = require('./key_value_map.tpl')();
    const tplRender = artT.compile(tpl);

    return tplRender(data);
  }
}

module.exports = KeyValueMap;