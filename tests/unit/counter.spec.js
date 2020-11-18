import { mount, shallowMount } from "@vue/test-utils";
import Counter from "../../src/components/Counter.vue";

describe("Counter.vue", () => {
  // nextTick
  // 提问：有人知道为什么期望的值与实际之不匹配吗（提示，Vue.js 异步更新队列）
  it("当点击按钮时，count 自增", done => {
    // given
    const wrapper = mount(Counter);
    // const wrapper = shallowMount(Counter);
    // console.log(wrapper.html());
    // when
    wrapper.find("button").trigger("click");
    // await wrapper.vm.$nextTick();
    wrapper.vm.$nextTick().then(res => {
      // then
      expect(wrapper.find("div").text()).toContain("1");
      done();
    });
  });
});
