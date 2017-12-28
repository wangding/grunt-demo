# Grunt Demo

演示 Grunt 工具自动执行图片压缩的构建任务，即：grunt-contrib-imagemin 插件的用法。

执行下面的命令：

```bash
git clone https://github.com/wangding/grunt-demo
git checkout imagemin
npm install
grunt
```

结果在 dist/images 目录下生成压缩后的图片文件。执行下面的命令查看压缩后的效果：

```bash
ls -l dist/images images
```

