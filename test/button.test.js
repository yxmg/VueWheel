/**
 *Created by 夜雪暮歌 on 19-3-15
 **/
const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

function createButtonVm(initData) {
  const Constructor = Vue.extend(Button)
  const vm = new Constructor(initData)
  return vm
}

describe('Button组件', () => {
  it('按钮是否存在', () => {
    expect(Button).to.be.exist
  })
  it('可以设置Icon', () => {
    const vm = createButtonVm({
      propsData: {
        icon: 'setting'
      }
    })

    vm.$mount()

    const useEl = vm.$el.querySelector('use')
    const useHref = useEl.getAttribute('xlink:href')
    expect(useHref).to.eq('#i-setting')

    vm.$destroy()
  })
  it('按钮Icon能否进入loading状态', () => {
    const vm = createButtonVm({
      propsData: {
        loading: true
      }
    })
    vm.$mount()

    const useEls = vm.$el.querySelectorAll('use')
    expect(useEls.length).to.eq(1)
    const useHref = useEls[0].getAttribute('xlink:href')
    expect(useHref).to.eq('#i-loading')
  })
  it('可以将Icon位置设置在左边', () => {
    const vm = createButtonVm({
      propsData: {
        icon: 'setting',
        iconPosition: 'left',
      }
    })
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm.$mount(div)

    const svgEl = vm.$el.querySelector('svg')

    expect(getComputedStyle(svgEl).order).to.eq('1')
    div.remove()
    vm.$destroy()
  })
  it('可以将Icon位置设置在右边', () => {
    const vm = createButtonVm({
      propsData: {
        icon: 'setting',
        iconPosition: 'right',
      }
    })
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm.$mount(div)

    const svgEl = vm.$el.querySelector('svg')
    const contentEl = vm.$el.querySelector('.content')
    expect(getComputedStyle(svgEl).order).to.eq('2')
    expect(getComputedStyle(contentEl).order).to.eq('1')

    div.remove()
    vm.$destroy()
  })
  it('按钮点击事件能否被正常触发', () => {
    const vm = createButtonVm()
    vm.$mount()

    const mockFn = sinon.fake()
    vm.$on('click',mockFn)
    vm.$el.click()
    expect(mockFn).to.have.been.called
  })
})
