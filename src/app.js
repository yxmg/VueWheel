/**
 *Created by 夜雪暮歌 on 19-3-11
 **/
import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'
import Icon from './icon'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
  }
})

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
