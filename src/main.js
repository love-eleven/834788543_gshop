//入口文件

import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer'
import loading from './common/loading.gif'
import './filters'

//注册全局组件标签
Vue.component(Button.name,Button)
Vue.use(VueLazyload,{//内部自定义了指令lazy
  loading
})

new Vue({
  el:"#app",
  render:h=>h(App),
  router,//vue-router
  store//vuex
})
