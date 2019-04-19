import {
  mount
} from "@vue/test-utils";
import ContactBox from "@/components/ContactBox";

const createContactBox = (id, name, surname, selected) => mount(ContactBox, {
  propsData: {
    id,
    name,
    surname,
    selected
  }
});
// snapshottestingisusefultocheckchangesonthe rendering state.
// If the rendering state doesn’t change,
// there is no way that snapshot testing can help us.
// Why snapshot testing?
// most of the times if you change the code you must
//change the assertions on the tests, while with snapshot testing you don’t need to.
describe("ContactBox.test.js", () => {


  describe("Watchers - inputValue", () => {
    it("fullName should be the combination of name + surname", () => {
      const cmp = createContactBox(0, "John", "Doe", false);
      //expect(cmp.vm.fullName).toBe("John Doe");
      expect(cmp.element).toMatchSnapshot();
    });

    it("should have a selected class when the selected prop is true", () => {
      const cmp = createContactBox(0, "John", "Doe", true);
      // expect(cmp.classes()).toContain("selected");
      expect(cmp.element).toMatchSnapshot();
    });

    it("should emit a contact-click event with its id when the component is cli\ cked", () => {
      const cmp = createContactBox(0, "John", "Doe", false);
      cmp.trigger("click");
      const payload = cmp.emitted("contact-click")[0][0];
      expect(payload).toBe(0);
    });
  });



});
