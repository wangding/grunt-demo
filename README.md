# Grunt Demo

演示 Grunt 工具自动执行图片合并的构建任务，即：grunt-spritesmith 插件的用法。

执行下面的命令：

```bash
git clone https://github.com/wangding/grunt-demo
git checkout sprite
npm install
grunt
```

在项目目录下面 dist 目录下面：

- sprites.css 是合并后的 CSS 文件
- spritesheet.png 是合并后的图片文件

在 dist 目录添加 index.html 引用生成的 CSS 文件，展示合并图片的用法。
