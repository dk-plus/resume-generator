const $ = require('jquery');
const artT = require('art-template');

const Wrapper = require('./wrapper/wrapper.js');

require('./resume.less');

const Resume = (() => {

  // 该模块
  const _e = {};

  // 操作dom
  const ele = {
    ROOT: '#test',
  };

  // 全局操作数据
  const _g = {
    // 渲染数据
    data: {
      title: 'hello resume'
    },
  };

  // 枚举
  const ENUM = {};

  // 开发配置
  const config = {
    mockMode: true,
  }

  // 初始化
  _e.init = () => {
    render();
    renderWrapperForm();
  }

  // 渲染函数
  function render() {
    const tpl = require('./resume.tpl')();
    const tplRender = artT.compile(tpl);

    $(ele.ROOT).html(tplRender(_g.data));
  }

  function renderWrapperForm() {
    require('./component_form.js').forEach((item) => {
      const { id, title, content } = item;
      new Wrapper({
        id, title, content
      })
    });
  }

  // 初始化事件
  function initEvent() { }

  return _e;

})();

module.exports = Resume;
