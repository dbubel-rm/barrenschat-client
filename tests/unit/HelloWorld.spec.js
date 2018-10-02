// import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Login from "@/components/Login.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Login, {
      propsData: { msg }
    });
    console.log("WRAPPER", wrapper.text());
    // expect(wrapper.text()).to.include(msg);
  });
});
