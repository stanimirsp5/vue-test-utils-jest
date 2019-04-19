// jest.mock("axios", () => ({
//   get: jest.fn(() => Promise.resolve({
//     data: 3
//   }))
// }))

import {
  shallowMount
} from "@vue/test-utils";
import Form from "../src/components/Form";
import axios from "axios"; // axios here is the mock from above!


describe("Form.test.js", () => {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(Form);
    //That will ensure each test starts with clean mocks and modules,
    // as it should be in unit testing
    jest.resetModules();
    jest.clearAllMocks();
  });

  describe("Properties", () => {
    it("Calls axios.get and checks promise result", async () => {
      const result = await cmp.vm.onSubmit("an");
      expect(result).toEqual({
        data: 3
      });
      expect(cmp.vm.results).toEqual(3);
      expect(axios.get).toBeCalledWith("https://jsonplaceholder.typicode.com/posts?q=an");
    });

    // This test should fail, but it doesn’t!
    // That’s because axios.get was called on the test before.
    // For that reason, it’s a good practice to clean the module registry and the mocks,
    // since they’re manipulated by Jest in order to make mocking happen. - resetModules() and clearAllMocks()
    // it("Axios should not be called here", () => {
    //   expect(axios.get).toBeCalledWith("https://jsonplaceholder.typicode.com/posts?q=an");
    // });

  });

});
