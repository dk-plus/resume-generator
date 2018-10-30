
const List = require('./list/list.js');
const Fragment = require('./fragment/fragment.js');
const Paragraph = require('./paragraph/paragraph.js');
const KeyValueMap = require('./key_value_map/key_value_map.js');
const MixTitle = require('./title/title.js');
const Avater = require('./avater/avater.js');

module.exports = [{
  id: '#ul-list',
  title: 'ul-list列表',
  content: List.render({
    type: 'ul',
    data: [
      'this is first',
      'this is sec',
      'this is third',
    ]
  }),
}, {
  id: '#ol-list',
  title: 'ol-list列表',
  content: List.render({
    type: 'ol',
    data: [
      'this is first',
      'this is sec',
      'this is third',
    ]
  }),
}, {
  id: '#tag-list',
  title: 'tag-list列表',
  content: List.render({
    type: 'tag',
    data: [
      'tag1',
      'tag2--1',
      'tag333333',
      'tag4',
    ]
  }),
}, {
  id: '#mix-list',
  title: 'mix-混合内容',
  content: Fragment.render({
    data: [List.render({
      type: 'tag',
      data: [
        'tag1',
        'tag2--1',
        'tag333333',
        'tag4',
      ]
    }), List.render({
      type: 'ol',
      data: [
        'this is first',
        'this is sec',
        'this is third',
      ]
    })]
  }),
}, {
  id: '#para-list',
  title: 'para-list列表',
  content: Paragraph.render({
    // type: 'quote',
    data: [
      'this paragragh 1',
      'this paragragh 2',
      'this paragragh 3',
      'this paragragh 4',
    ]
  }),
}, {
  id: '#quote-list',
  title: 'quote-list列表',
  content: Paragraph.render({
    type: 'quote',
    data: [
      'this quote 1',
      'this quote 2',
      'this quote 3',
      'this quote 4',
    ]
  }),
}, {
  id: '#key-value-map-list',
  title: 'key-value-map-list列表',
  content: KeyValueMap.render({
    type: 'text',
    data: [{
      key: '地址',
      value: '迎龙路广东金融学院'
    }, {
      key: '邮箱',
      value: 'dkplus@qq.com',
      type: 'link',
    }, {
      key: '手机',
      value: '135-5613-0815'
    }]
  }),
}, {
  id: '#progress-list',
  title: 'progress-list列表',
  content: KeyValueMap.render({
    type: 'progress',
    data: [{
      key: 'html',
      value: 50
    }, {
      key: 'js',
      value: 70,
    }, {
      key: 'css',
      value: 20
    }]
  }),
}, {
  id: '#mix-title',
  title: 'mix-title列表',
  content: Fragment.render({
    data: [MixTitle.render({
      type: 'default',
      size: 'normal',
      data: {
        type: 'default',
        title: '阿里巴巴',
        extra: '2018-01 - 至今',
      }
    }), MixTitle.render({
      type: 'display-y',
      size: 'normal',
      data: {
        type: 'default',
        title: 'dkplus',
        extra: '前端工程师',
      }
    }),]
  })
}, {
  id: '#avater-list',
  title: 'avater列表',
  content: Fragment.render({
    data: [Avater.render({
      type: 'default',
      imgStyle: 'default',
      width: 300,
      height: 200,
      src: './images/dk.jpg',
      desc: 'default,default,300,200',
    }), Avater.render({
      type: 'circle-border',
      imgStyle: 'height-first',
      width: 100,
      height: 100,
      src: './images/dk.jpg',
      desc: 'circle-border,height-first,100,100',
    }), Avater.render({
      type: 'circle-border',
      imgStyle: 'width-first',
      src: './images/avater.jpg',
      offsetX: 0,
      offsetY: 10,
      desc: 'circle-border,width-first,offsetX0,offsetY10',
    })]
  }),
}];