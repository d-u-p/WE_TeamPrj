import { shallowMount} from '@vue/test-utils'
import home from './home'

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
  jest.mock('../../apis/upload', () => ({
    render(h) {
      h();
    },
  }));
describe('<home.vue>', () => {
  it('the home page show successed/>', () => {
    const wrapper = shallowMount(home)
    expect(wrapper.find('div').isVisible()).toBe(true);
  })
})