const $ = require('jquery');
const init = function() {
  // 个人技能进度条值
  $('[data-val]').each((index, item) => {
    let $item = $(item);
    let val = $item.attr('data-val');
    $item.css({
      width: val + '%'
    })
  });
}

module.exports = {
  init: init
}