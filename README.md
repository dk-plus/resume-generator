# resume-generator
> 简历生成器3.0，一个组件化简历生成器。

## Install
1. `npm install`安装依赖
2. `npm run dev`开发
3. `npm run start`运行，并打开[http://localhost:3000](http://localhost:3000)访问

## Usage
待补充...

## Develop Doc
待补充...

## Components

### Wrapper

> Wrapper是容器类，传入id，title，content可以在id所在的div里新增一个窗口，其内容为content传的内容，可以为其他类render()方法返回的结果，同时支持直接传入html字符以及dom节点。

```javascript
const Wrapper = require('./wrapper/wrapper.js');
new Wrapper({
  id: '#selector', 
  title: 'title', 
  content: 'string'
})
```

### Fragment

> Fragment为代码片段类，可以将存在的类所渲染的结果结合在一起。传入data属性里作为数组的一员即可。

```javascript
Fragment.render({
  data: [
      List.render({
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
    })
  ]
})
```

### Avater

> Avater类是头像类。

1. 暂时支持两种type：default和circle-border，决定头像的样式
2. 支持设置width和height，默认值为100
3. imgStyle有三个值：default、height-first、width-first，决定图片横向或纵向铺满
4. offsetX和offsetY提供图片的偏移值

```javascript
Avater.render({
  type: 'default',
  imgStyle: 'default',
  width: 300,
  height: 200,
  src: './images/dk.jpg',
  desc: 'default,default,300,200',
})
```
```javascript
Avater.render({
  type: 'circle-border',
  imgStyle: 'height-first',
  width: 100,
  height: 100,
  src: './images/dk.jpg',
  desc: 'circle-border,height-first,100,100',
})
```
```javascript
Avater.render({
    type: 'circle-border',
    imgStyle: 'width-first',
    src: './images/avater.jpg',
    offsetX: 0,
    offsetY: 10,
    desc: 'circle-border,width-first,offsetX0,offsetY10',
  })]
})
```

### KeyValueMap

> KeyValueMap是键值对类。

1. item的type有两个值：text和progress，决定键值对展示值为文本或进度条
2. 值也有type字段，为link时可点击跳转

```javascript
KeyValueMap.render({
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
})
```
```javascript
KeyValueMap.render({
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
})
```

### List

> List是列表类。

type有3个值：ul、ol、tag，分别展示无序列表、有序列表、标签列表。

```javascript
List.render({
  type: 'ul',
  data: [
    'this is first',
    'this is sec',
    'this is third',
  ]
})
```
```javascript
List.render({
  type: 'ol',
  data: [
    'this is first',
    'this is sec',
    'this is third',
  ]
})
```
```javascript
List.render({
    type: 'tag',
    data: [
      'tag1',
      'tag2--1',
      'tag333333',
      'tag4',
    ]
  })
```

### Paragragh

> Paragragh是段落类。

type为quote的时候，展示为引用样式。

```javascript
Paragraph.render({
  data: [
    'this paragragh 1',
    'this paragragh 2',
    'this paragragh 3',
    'this paragragh 4',
  ]
})
```
```javascript
Paragraph.render({
    type: 'quote',
    data: [
      'this quote 1',
      'this quote 2',
      'this quote 3',
      'this quote 4',
    ]
  })
```

### Title

> Title为标题类。

1. item的type有default、display-y，display-y时为竖向展示
2. size为大小，有small、normal、big尺寸
3. extra为附加字段

```javascript
MixTitle.render({
  type: 'default',
  size: 'normal',
  data: {
    type: 'default',
    title: '阿里巴巴',
    extra: '2018-01 - 至今',
  }
})
```

```javascript
MixTitle.render({
  type: 'display-y',
  size: 'normal',
  data: {
    type: 'default',
    title: 'dkplus',
    extra: '前端工程师',
  }
})
```