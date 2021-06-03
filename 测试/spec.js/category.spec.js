import { shallowMount } from '@vue/test-utils'
import category from './category'

//忽略当前组件引用的其他文件，隔离测试
jest.mock('../Index/nearby_shops', () => ({
  render(h) {
    h();
  },
}));
jest.mock('../Index/nav.vue', () => ({
    render(h) {
      h();
    },
  }));  
describe('<category.vue/>', () => {
  it('the category is show', () => {
    //通过是否成功显示判断是否成功渲染
    const wrapper = shallowMount(category);
    expect(wrapper.find('div').isVisible()).toBe(true);
  })
})