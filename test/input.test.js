/**
 *Created by 夜雪暮歌 on 19-3-15
 **/
const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

const Constructor = Vue.extend(Input)

function createInputVm(initData) {
  const vm = new Constructor(initData)
  return vm
}

describe('Button组件', () => {
  it('按钮是否存在', () => {
    expect(Input).to.be.exist
  })

  describe('props', () => {
    let vm
    afterEach(function () {
      vm.$destroy()
    });

    it('能否接收value值', () => {
      vm = createInputVm({
        propsData: {
          value: '测试'
        }
      }).$mount()

      const inputEl = vm.$el.querySelector('input')
      expect(inputEl.value).to.equal('测试')

    })

    it('能否接收disabled', () => {
      vm = createInputVm({
        propsData: {
          disabled: true
        }
      }).$mount()

      const inputEl = vm.$el.querySelector('input')
      expect(inputEl.disabled).to.equal(true)
    })

    it('能否接收readonly', () => {
      vm = createInputVm({
        propsData: {
          readonly: true
        }
      }).$mount()

      const inputEl = vm.$el.querySelector('input')
      expect(inputEl.readOnly).to.equal(true)
    })

    it('能否接收error并展示错误信息', () => {
      vm = createInputVm({
        propsData: {
          error: '错误信息'
        }
      }).$mount()

      const useEl = vm.$el.querySelector('use')
      expect(useEl.getAttribute('xlink:href')).to.equal('#i-error')
      const errorTextEl = vm.$el.querySelector('.text-error')
      expect(errorTextEl.innerText).to.equal('错误信息')
    })
  })

  describe('event', () => {
    let vm
    afterEach(function () {
      vm.$destroy()
    });
    it('支持change/input/focus/blur事件', () => {
      const eventNameList = ['change','input','focus','blur']
      vm = createInputVm({}).$mount()
      eventNameList.forEach(eventName => {
        let callback = sinon.fake()
        vm.$on('change', callback)
        const event = new Event('change')
        let inputEl = vm.$el.querySelector('input')
        inputEl.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
      })
    })

  })
})
