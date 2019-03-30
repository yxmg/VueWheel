/**
 *Created by 夜雪暮歌 on 19-3-11
 **/
import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    input1: '张三',
    input2: '李四',
    input3: '王五',
    input4: '赵六',
  }
})

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
