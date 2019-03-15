/**
 *Created by 夜雪暮歌 on 19-3-11
 **/
import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'
import Icon from './icon'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
  }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// 单元测试1:含有Icon
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()

  const useEl = vm.$el.querySelector('use')
  const useHref = useEl.getAttribute('xlink:href')
  expect(useHref).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}

// 单元测试2：是否能loading
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true,
    }
  })
  vm.$mount()

  const useEl = vm.$el.querySelector('use')
  const useHref = useEl.getAttribute('xlink:href')
  expect(useHref).to.eq('#i-loading')
}
// 单元测试3：能正确设置图标位置 右
{
  const divEl = document.createElement('div')
  document.body.appendChild(divEl)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right',
    }
  })
  vm.$mount(divEl)

  const svgEl = vm.$el.querySelector('svg')
  const {order} = window.getComputedStyle(svgEl)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

// 单元测试4：能正确设置图标位置 左
{
  const divEl = document.createElement('div')
  document.body.appendChild(divEl)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  vm.$mount(divEl)

  const svgEl = vm.$el.querySelector('svg')
  const {order} = window.getComputedStyle(svgEl)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

// 单元测试5：能监听click - mock
{
  const spy = chai.spy(() => {})
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()
  vm.$on('click',spy)

  const buttonEl = vm.$el
  buttonEl.click()
  expect(spy).to.have.been.called
}
