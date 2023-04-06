/*
 * @Author: ls shuai.lu@goodark.com
 * @Date: 2023-03-28 15:36:03
 * @LastEditors: ls shuai.lu@goodark.com
 * @LastEditTime: 2023-04-03 10:09:15
 * @FilePath: \lsvueproject\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import china from 'echarts/map/json/china.json'
import BaiduMap from 'vue-baidu-map'

// 百度地图API
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
echarts.registerMap('china', china)

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'uy8KnG5Z178uBTTbUwVYNcHT0o2MpyW1'
})
Vue.prototype.BaiduMap = BaiduMap

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
