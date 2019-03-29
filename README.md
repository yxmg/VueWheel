# Vuewheel Vue-UI组件库

[![Build Status](https://travis-ci.org/yxmg/VueWheel.svg?branch=master)](https://travis-ci.org/yxmg/VueWheel)
![npm version](https://img.shields.io/npm/v/yxmg-1-1.svg)

作者：yxmg

## 介绍
基于vue.js开发的UI框架，出于学习实践的目的创建，希望对你有用

## 开始使用
1、添加CSS样式  
使用本框架请在CSS中开启border-box
```css
*, *::before, *::after {
    box-sizing: border-box; 
}
```
注意：IE8以下不支持`box-sizing`

暂时还需要添加以下CSS变量（后续会使用scss替换）
```css
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eeeeee;
  --border-radius: 4px;
  --color: #333333;
  --border-color: #999999;
  --border-color-hover: #666666;
}
```
注意：IE15以下不支持`CSS变量`  
2、安装
```shell
npm install --save yxmg-1-1
// yarn add yxmg-1-1
```  
3、引入使用
在`main.js`中
```javascript
import { Button,ButtonGroup, Icon } from 'yxmg-1-1'
import 'yxmg-1-1/dist/index.css'

// 全局注册
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-icon',Icon)

// 单独引入
export default {
  name: 'xxx',
  components: {
    'g-button': Button
  }
}
```

## 文档

## 提问

## 变更记录






