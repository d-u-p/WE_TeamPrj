import { shallowMount} from '@vue/test-utils'
import location from './location'

//忽略当前组件引用的其他文件，隔离测试
jest.mock('../../apis/location', () => ({
    render(h) {
      h();
    },
  }));
  jest.mock('../../components/search', () => ({
    render(h) {
      h();
    },
  }));

//判断关键显示部分是否成功显示
describe('<location.vue>', () => {
  it('the location page show successed/>', () => {
    const wrapper = shallowMount(location);
    expect(wrapper.find('div').isVisible()).toBe(true);
  })
})