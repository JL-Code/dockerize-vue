import Logo from "../../src/components/Logo";
import { mount } from "@vue/test-utils";

describe("LogoComponent", () => {
  it("渲染给定图片", () => {
    // 准备数据
    const logo = "/img/logo@2x.png";
    const wrapper = mount(Logo, {
      propsData: {
        logo: logo
      }
    });
    // 期望
    expect(wrapper.find("img").attributes().src).toBe("/img/logo@2x2.png");
  });
});
