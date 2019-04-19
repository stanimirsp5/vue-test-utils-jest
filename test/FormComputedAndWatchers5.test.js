import {
  shallowMount
} from "@vue/test-utils";
import Form from "../src/components/Form";
describe("Form.test.js", () => {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(Form);
  });

  describe("Properties", () => {

    it("returns the string in normal order if reversed property is not true", () => {
      cmp.setData({
        inputValue: "Yoo"
      });
      expect(cmp.vm.reversedInput).toBe("Yoo");
      // const wrapper = shallowMount(Form)
      // wrapper.setData({
      //   inputValue: 'bar'
      // })
      // expect(wrapper.vm.reversedInput).toBe('bar')
    });

    it("returns the reversed string if reversed property is true", () => {
      cmp.setData({
        inputValue: "Yoo"
      });
      cmp.setProps({
        reversed: true
      });
      expect(cmp.vm.reversedInput).toBe("ooY");
    });

  });

  describe("Watchers - inputValue", () => {
    let spy;
    beforeAll(() => {
      spy = jest.spyOn(console, "log");
    });
    afterEach(() => {
      spy.mockClear();
    });
    it("is not called if value is empty (trimmed)", () => {
      cmp.setData({
        inputValue: " "
      });
      expect(spy).not.toBeCalled();
    });
    it("is not called if values are the same", () => {
      cmp = shallowMount(Form, {
        data: () => ({
          inputValue: "foo"
        })
      });
      cmp.setData({
        inputValue: "foo"
      });
      expect(spy).not.toBeCalled();
    });

    // with 'done' its one way for jest to test asynchronous
    it("is called with the new value in other cases", done => {
      cmp.vm.inputValue = "foo";
      cmp.vm.$nextTick(() => {
        expect(spy).toBeCalled();
        done();
      });
    });

  });


});
