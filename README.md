# dockerize-vue-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Unit Test
#### 前置条件
安装下面依赖：
```shell script
npm i -D  "@vue/test-utils": "^1.1.1"
npm i -D "@vue/cli-plugin-unit-jest": "^4.5.9"
npm i -D "jest-html-reporter": "^3.3.0" # 生成 jest html 报告
```

添加 jest.config.js 
```js
// const { defaults } = require("jest-config");
// reference https://jestjs.io/docs/en/configuration
module.exports = {
    // 用作 Jest 配置基础的预设。预设应该指向在根目录下具有jest-preset.json或jest-preset.js文件的npm模块。
    preset: "@vue/cli-plugin-unit-jest",
    verbose: true,
    // 收集代码测试覆盖率（ 开启后测试速度会降低 ）
    collectCoverage: true,
    transformIgnorePatterns: ["/node_modules/(?!@babel)"]
};

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
