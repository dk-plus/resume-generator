# resume-generator
> 简历生成器2.0，基于传统方法实现的组件化简历生成器。

## Install
1. `npm install`安装依赖
2. `npm run dev`运行
3. 打开`dist/index.html`查看结果

## Usage
*简单使用方法*

打开`src/modules/lib/config.js`，根据模板与里面的注释提示进行填写，大多数内容都是可选填的，并且可以通过字段`show`来控制是否渲染这一模块的内容。

填好`config.js`以后，可以运行`npm run dev`并用chrome打开`dist/index.html`查看效果，可以通过chrome的`打印`功能储存文件为`pdf`。

*高级使用方法*

如果你希望定制自己的简历，可以查看`src/modules/components`的源码，这些组件的写法较为固定，很容易上手。