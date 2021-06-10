import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import confirm_order from './confirm_order'

//为了封装隔离组件，使用本地创建的数据作为参数传入
//伪造本地getters
const localVue = createLocalVue()
localVue.use(Vuex)

//忽略当前组件引用的其他文件，隔离测试
jest.mock('../../apis/restaurant', () => ({
    render(h) {
      h();
    },
  }));
  jest.mock('../../apis/user', () => ({
    render(h) {
      h();
    },
  }));
  jest.mock('../../apis/order', () => ({
    render(h) {
      h();
    },
  }));
describe('<confirm_order.vue>', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      deliveryAddress: () => '123123',
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('the confirm_order will be show/>', () => {
    const wrapper = shallowMount(confirm_order, { store, localVue })
    expect(wrapper.find('div').isVisible()).toBe(true);
  })
})