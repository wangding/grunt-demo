# Grunt Demo

演示 Grunt 工具自动执行 usemin 的构建任务，即：grunt-usemin 插件的用法。

执行下面的命令：

```bash
git clone https://github.com/wangding/grunt-demo
git checkout usemin
npm install
grunt
```

grunt 命令自动执行以下构建任务：

1. jshint 静态代码检查；
2. concat 代码打包合并；
3. uglify JavaScript 代码压缩；
4. cssmin CSS 代码压缩；
5. usemin 替换 HTML 代码中的 JavaScript 和 CSS 代码的引用；

自动构建的结果在 dist 目录下。

运行 `grunt clean-all` 命令可以还原 `grunt` 命令的运行结果。
