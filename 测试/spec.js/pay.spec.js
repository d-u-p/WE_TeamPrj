import { shallowMount } from '@vue/test-utils';
import pay from './pay';

//忽略当前组件引用的其他文件，隔离测试
jest.mock('./scan.vue', () => ({
    render(h) {
      h();
    },
  }));
  jest.mock('../../apis/order', () => ({
    render(h) {
      h();
    },
  }));

describe('<pay.vue/>', () => {
  const wrapper = shallowMount(pay);
    it("the pay page show", () => {
        expect(wrapper.find('div').isVisible()).toBe(true);
  });
});