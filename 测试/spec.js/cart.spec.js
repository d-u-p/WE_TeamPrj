import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cart from './cart'

//为了封装隔离组件，使用本地创建的数据作为参数传入
const localVue = createLocalVue()
localVue.use(Vuex)

//忽略当前组件引用的其他文件，隔离测试
jest.mock('../../components/bottom.vue', () => ({
    render(h) {
      h();
    },
  }));
describe('<cart.vue>', () => {
  let getters
  let store
  //伪造本地getters
  beforeEach(() => {
    getters = {
      cartList: () => '',
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('the cartlist will be show/>', () => {
    //判断关键显示部分是否显示成功
    const wrapper = shallowMount(cart, { store, localVue })
    expect(wrapper.find('v-head').isVisible()).toBe(true);
  })
})