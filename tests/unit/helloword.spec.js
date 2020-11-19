// 引入 vue-test-utils 的 shallowMount 用于挂载 Vue 组件 【mount vs shallowMount 的区别】
import { mount, shallowMount } from "@vue/test-utils";
// 引入待测试的 Vue 组件
import HelloWorld from "../../src/components/HelloWorld.vue";

// shallow  /ˈʃæləʊ/  浅的，肤浅的
// 定义一个测试套件 【推荐使用被测试的文件的名称命名】
describe("HelloWorld.vue", () => {
  afterAll(() => {
    console.log("所有的测试用例运行后运行");
  });

  afterEach(() => {
    console.log("每个测试用例运行完后运行");
  });

  beforeAll(() => {
    console.log("所有测试用例运行前运行");
  });

  beforeEach(() => {
    console.log("每个测试用例运行前运行");
  });

  // 定义一个测试用例
  it("renders props.msg when passed", () => {
    // Given  准备数据
    const msg = "new message";
    // When 通过 shallowMount 挂载组件，并设置一些 props 参数 也可以通过  wrapper.setProps 设置 https://vue-test-utils.vuejs.org/zh/api/wrapper/#setprops
    const wrapper = mount(HelloWorld, {
      propsData: { msg }
    });
    // Then 断言
    expect(wrapper.text()).toMatch("1new message");
  });

  it("测试用例2", () => {
    console.log("测试用例2");
  });
});
