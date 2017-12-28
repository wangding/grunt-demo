# Grunt Demo

演示 Grunt 工具自动执行 CSS 文件压缩的构建任务，即：grunt-contrib-cssmin 插件的用法。

执行下面的命令：

```bash
git clone https://github.com/wangding/grunt-demo
git checkout cssmin
npm install
grunt
```

结果在当前目录下，原来的 CSS 代码文件 rectangle.css 被压缩成 rectangle.min.css 文件。运行下面的命令，来比较 CSS 文件压缩后的效果：

```bash
ls -l *.css
```
