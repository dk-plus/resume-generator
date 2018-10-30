const $ = require('jquery');
const artT = require('art-template');

require('./wrapper.less');

// 常量
const NAME = 'Wrapper';
const VERSION = '0.1.0';
const ClassName = {
  content: '.content',
};
const Selector = {};
const ENUM = {};

class Wrapper {
  // 构造函数
  constructor(option) {
    this.option = option;
    this.render();
  }

  render() {
    const { id, title, content } = this.option;

    const tpl = require('./wrapper.tpl')();
    const tplRender = artT.compile(tpl);

    $(id).html(tplRender({ title }));
    $(id).find(ClassName.content).html(content);
  }
}

module.exports = Wrapper;