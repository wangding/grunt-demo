# Grunt Demo

演示 Grunt 工具自动执行 HTML 代码压缩的构建任务，即：grunt-contrib-htmlmin 插件的用法。

执行下面的命令：

```bash
git clone https://github.com/wangding/grunt-demo
git checkout htmlmin
npm install
grunt
```

结果在 dist 目录生成压缩过的 index.html，主要是删除了换行符。通过下面命令来查看压缩效果：

```bash
ls -l dist/index.html ./index.html
```
