const Common = (() => {
  const _e = {};

  function $(ele) {
    let eleArr = document.querySelectorAll(ele)
    if (eleArr.length > 1) {
      return eleArr;
    }
    return document.querySelector(ele); 
  }

  return _e;
})();

module.exports = Common;