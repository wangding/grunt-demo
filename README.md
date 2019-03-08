# Grunt Demo

演示 Grunt 实现 HTTP API 接口测试，用到 grunt-mocha-cli 和 grunt-run 插件。

执行下面的命令：

```
git clone https://github.com/wangding/grunt-demo
git checkout http-api-test
npm install
grunt
```

运行 grunt 命令会执行以下三个构建任务：
- 启动 HTTP API web 服务
- 对 API 做单元接口测试
- 关闭 HTTP API web 服务

