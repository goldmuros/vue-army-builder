import { mount, shallowMount } from "@vue/test-utils";
import CardArmy from "@/components/CardArmy.vue";

describe("CardArmy", () => {
  it("read props", () => {
    const wrapper = shallowMount(CardArmy, {
      propsData: {
        army: {
          title: "Enanos",
          src: "dwarf.png"
        }
      }
    })
    expect(wrapper.text()).toBe("Enanos");
  });
});
