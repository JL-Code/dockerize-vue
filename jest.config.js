// const { defaults } = require("jest-config");
// reference https://jestjs.io/docs/en/configuration
module.exports = {
    // 用作 Jest 配置基础的预设。预设应该指向在根目录下具有jest-preset.json或jest-preset.js文件的npm模块。
    preset: "@vue/cli-plugin-unit-jest",
    verbose: true,
    // 收集代码测试覆盖率（ 开启后测试速度会降低 ）
    collectCoverage: false,
    transformIgnorePatterns: ["/node_modules/(?!@babel)"]
};
