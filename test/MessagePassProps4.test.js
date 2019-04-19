import {
  mount
} from '@vue/test-utils'
import Message from '../src/components/Message'
const createCmp = propsData => mount(Message, {
  propsData
});

describe("Message.test.js", () => {
  let cmp;
  describe('Properties', () => {
    it("is cat property exists", () => {
      cmp = createCmp({
        cat: "hey",
        message2: 'itsRequiredField',
      });
      expect(cmp.props("cat")).toBeFalsy();
    })

    it("has a message property", () => {
      const wrapper = mount(Message, {
        propsData: {
          message: 'hey',
          message2: 'itsRequiredField',
        }
      })
      expect(wrapper.props().message).toBe('hey')

      // cmp = createCmp({
      //   message: "hey"
      // });
      // expect(cmp.props("message", "hey")).toBeTruthy();

    });

    it("Paco is the default author", () => {
      cmp = createCmp({
        message: "hey",
        message2: 'itsRequiredField'
      });
      expect(cmp.props("author", "Paco")).toBeTruthy();
    });

    //// test if prop is required, his type and his custom calidator
    // describe('Validation', () => {
    //   const messageT = createCmp().vm.$options.props.message2;

    //   it('message is of type string', () => {
    //     expect(messageT.type).toBe(String)
    //     expect(messageT.type).toMatchSnapshot()
    //   })
    //   it('message is required', () => {
    //     expect(messageT.required).toBeTruthy()
    //   })
    //   it('message has at least length 2', () => {
    //     expect(messageT.validator && messageT.validator('a')).toBeFalsy();
    //     expect(messageT.validator && messageT.validator('aa')).toBeTruthy()
    //   })
    // })

  })

  // describe("Events", () => {
  //   beforeEach(() => {
  //     cmp = createCmp({
  //       message: "Cat"
  //     });
  //   });
  //   it("calls handleClick when click on message", () => {
  //     const wrapper = mount(Message)
  //     const handler = wrapper.find(".message");
  //     handler.trigger("click");
  //     expect(handler.vm.handleClick).toBeCalled();
  //   });
  // });
})
