import { shallowMount } from '@vue/test-utils';
import login from './login';

//忽略当前组件引用的其他文件，隔离测试
jest.mock('../../apis/user', () => ({
    render(h) {
      h();
    },
  }));
  jest.mock('../../utils/auth', () => ({
    render(h) {
      h();
    },
  }));

describe('<login.vue/>', () => {
  const wrapper = shallowMount(login);
    it("login success", () => {
        expect(wrapper.find('div').isVisible()).toBe(true);
  });
});