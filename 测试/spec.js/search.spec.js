import { shallowMount } from '@vue/test-utils';
import search from './search';

//忽略当前组件引用的其他文件，隔离测试
jest.mock('../../apis/restaurant', () => ({
    render(h) {
      h();
    },
  }));
  jest.mock('../../components/search', () => ({
    render(h) {
      h();
    },
  }));

describe('<search.vue/>', () => {
  const wrapper = shallowMount(search);
    it("search success", () => {
        expect(wrapper.find('div').isVisible()).toBe(true);
  });
});