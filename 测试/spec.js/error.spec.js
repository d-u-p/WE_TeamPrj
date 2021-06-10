import { shallowMount } from '@vue/test-utils';
import error from './error';
//描写error页面
describe('<error.vue/>', () => {
  const wrapper = shallowMount(error);
  it("the error page show success! ", () => {
    //看错误界面的图片是否显示
    //通过判断是否显示得出是否成功运行
    expect(wrapper.find('img').isVisible()).toBe(true);
  });
});