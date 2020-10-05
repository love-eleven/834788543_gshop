//路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'


// import MSite from '../pages/MSite/MSite'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Search from '../pages/Search/Search'
//路由组件懒加载，执行函数返回import加载，只有执行函数才回家在路由组件
//函数在第一次请求对相应的路由路径才会执行
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import Shopinfo from '../pages/Shop/Shopinfos/Shopinfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path: '/',
      redirect:'/msite'
    },
    {
      path: '/shop',
      component:Shop,
      children:[
        {
          path: '/shop/goods',
          component:ShopGoods,
        },
        {
          path: '/shop/ratings',
          component:ShopRatings,
        },
        {
          path: '/shop/info',
          component:Shopinfo,
        },
        {
          path: '',
          redirect:'/shop/goods'
        },
      ]
    },

  ]
})
