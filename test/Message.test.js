import {
  mount
} from '@vue/test-utils'
import Message from '../src/components/Message'
describe('MessageList.test.js', () => {
  let cmp
  beforeEach(() => {
    cmp = mount(Message, { // Be aware that props is overridden using `propsData`
      propsData: {
        message: 'Cat',
        message2: 'itsRequired',
      }
    })
  })
  it("Both MessageList and Message are vue instances", () => {
    expect(cmp.isVueInstance()).toBe(true);
    expect(cmp.find(Message).isVueInstance()).toBe(true);
  });

  it("Message element exists", () => {
    expect(cmp.find(".message").exists()).toBe(true);
  });
  it("Message is not empty", () => {
    expect(cmp.find(Message).isEmpty()).toBe(false);
  });
  it('Message has a class attribute set to "message"', () => {
    expect(cmp.find(Message).attributes().class).toBe("message");
  });
  it("Message component has the .message class", () => {
    expect(cmp.find(Message).classes()).toContain("message");
  });
  it("Message component has style padding-top: 10", () => {
    expect(cmp.find(Message).attributes().style).toBe("padding-top: 10px;");
  })
})
