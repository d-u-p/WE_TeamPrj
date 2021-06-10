import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from './Index'

//为了封装隔离组件，使用本地创建的数据作为参数传入
//伪造本地getters
const localVue = createLocalVue()
localVue.use(Vuex)

//忽略当前组件引用的其他文件，隔离测试
jest.mock('./nearby_shops.vue', () => ({
    render(h) {
      h();
    },
  }));
  jest.mock('./nav.vue', () => ({
    render(h) {
      h();
    },
  }));
describe('<Index.vue>', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      address: () => '',
      locationReady: () => 1
    }
    store = new Vuex.Store({
      getters
    })
  })
  //判断伪造getters后传入的数据是否和显示数据相同
  it('the address get successfully/>', () => {
    const wrapper = shallowMount(Index, { store, localVue })
    const p = wrapper.find('span')
    expect(p.text()).toBe(getters.address())
  })
})