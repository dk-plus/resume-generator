const Utils = (() => {

  const _e = {};

  // 获取url查询参数
  _e.getUrlParems = () => {

    let _parem = {};
    let url = window.location.href;
    let parems = url.split('?')[1].split('#')[0];

    parems.split('&').forEach((pair, index) => {
      let key = pair.split('=')[0];
      let value = pair.split('=')[1];
      _parem[key] = value;
    });

    return _parem;

  }

  // 设置url参数
  _e.setUrlParems = (obj) => {
    let url = window.location.href;
    let hash = url.split('#')[1];
    let keys = Object.keys(obj);
    let parems = '';
    let _parems = '';

    keys.forEach((key, index) => {
      let begin = '&';
      if (index === 0) {
        begin = url.split('#')[0].indexOf('?') < 0
          ? '?'
          : '&'
      }
      parems += `${begin}${key}=${obj[key]}`
    });

    _parems = decodeURIComponent(parems);
    if (!hash) {
      window.location.href = `${url.split('#')[0]}${_parems}`;
    } else {
      window.location.href = `${url.split('#')[0]}${_parems}#${hash}`;
    }
  }

  // 判断是否数组
  _e.isArray = (arr) => {
    if (Array.isArray) {
      return Array.isArray(arr);
    }
    return Object.prototype.toString.call(arr);
  }

  return _e;

})();

module.exports = Utils;
