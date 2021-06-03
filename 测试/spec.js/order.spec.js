import { shallowMount } from '@vue/test-utils';
import order from './order';

//忽略当前组件引用的其他文件，隔离测试
jest.mock('../../apis/order', () => ({
    render(h) {
      h();
    },
  }));
  jest.mock('../../utils/auth', () => ({
    render(h) {
      h();
    },
  }));

describe('<order.vue/>', () => {
  const wrapper = shallowMount(order);
    it("the order button exective", () => {
      // 点击 button
      wrapper.find('button').trigger('click');
      // 可以立即获取 msg 最新的值，不再需要 wrapper.vm.$nextTick()
        expect(wrapper.find('div').isVisible()).toBe(true);
  });
});