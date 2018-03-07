# resume-generator
> 简历生成器，可以通过填写`json`，运行项目生成简历。[示例](https://dk-plus.github.io/resume-generator/dist/)

## 使用方法
1. 克隆项目，运行`npm install`
2. 修改`src/modules/data.json`
3. 运行`npm run dev`，用chrome打开`dist`目录的`index.html`预览效果
4. 在菜单中选择`打印`，可另存为`pdf`

## 项目结构
```txt
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  webpack.config.js
│  
├─dist
│      app.css
│      app.js
│      dk.pdf
│      index.html //最终生成文件
│         
├─src
│  │  index.html
│  │  index.js
│  │  
│  ├─config
│  │      img.jpg //存放简历照片
│  │      
│  ├─controllers
│  │      parse.js //扩展功能，用phantomjs转html为pdf，目前不支持css3布局
│  │      
│  ├─modules
│  │      data.json //简历数据
│  │      render.js
│  │      
│  └─view
│          index.less
│          index.tpl
│          reset.less
│          reset_css.js
│          util.less
│          
└─test
```