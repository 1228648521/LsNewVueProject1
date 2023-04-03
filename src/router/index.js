/*
 * @Author: ls shuai.lu@goodark.com
 * @Date: 2023-03-28 15:36:03
 * @LastEditors: ls shuai.lu@goodark.com
 * @LastEditTime: 2023-04-03 16:06:59
 * @FilePath: \lsvueproject\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/Login'
import Home from '@/view/Home'
import HotCity from '@/view/HotCity'
import NavigationBar from '@/view/Navigation_Bar'
// import threeDLocation from '@/view/threeDLocation'
import test from '@/view/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    { path: '/home', component: Home },
    { path: '/test', component: test },
    { path: '/NavigationBar', component: NavigationBar },
    { path: '/HotCity', component: HotCity } // ,
    // { path: '/threeDLocation', component: threeDLocation }

  ]
})
