import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storem from './store'

//为了封装隔离组件，使用本地创建的数据作为参数传入
//伪造本地getters
const localVue = createLocalVue()
localVue.use(Vuex)
//忽略当前组件引用的其他文件，隔离测试
jest.mock('../../components/bottom.vue', () => ({
    render(h) {
      h();
    },
  }));
describe('<store.vue>', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      poi_info: () => '',
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('the store will be show/>', () => {
    const wrapper = shallowMount(storem, { store, localVue })
    expect(wrapper.find('v-head').isVisible()).toBe(true);
  })
})