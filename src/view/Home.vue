<!--
 * @Author: ls shuai.lu@goodark.com
 * @Date: 2023-03-22 14:17:17
 * @LastEditors: ls shuai.lu@goodark.com
 * @LastEditTime: 2023-03-31 09:37:10
 * @FilePath: \vueproject2\src\view\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

 <template>
  <div>
    <div class="search-bar">
      <input type="text" placeholder="输入关键词搜索">
      <button>搜索</button>
    </div>

  <el-container>
    <el-aside width="700px">
      <div class="hot-recommendation">
    <el-tabs v-model="activeTab1">
      <el-tab-pane label="人少推荐" name="movie" >
        <div  justify-content: center>
          <div id="map-china" ></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="优选推荐" name="book">
        <div class="book-recommendation">
         sss
        </div>
      </el-tab-pane>
      <el-tab-pane label="标签3" name="music">
        <div class="music-recommendation">
        </div>
      </el-tab-pane>
      <el-tab-pane label="标签4" name="food">
        <div class="food-recommendation">
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
    </el-aside>
    <el-aside width="700px">
      <el-tabs v-model="activeTab1">
      <el-tab-pane label="标签页 1">这是标签页 1 的内容</el-tab-pane>
      <el-tab-pane label="标签页 2">这是标签页 2 的内容</el-tab-pane>
      <el-tab-pane label="标签页 3">这是标签页 3 的内容</el-tab-pane>
    </el-tabs>
</el-aside>
  </el-container>

  <el-container>
    <el-main>
      <el-carousel  type="card" :interval = "4000"  height = "280px" class="carousel">
        <el-carousel-item v-for="item in items" :key="item.id">
        <img :src="item.image" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>

  </div>
</template>

<script>
import jpg from '@/assets/1.jpg'
import jpg1 from '@/assets/2.jpg'
import jpg2 from '@/assets/3.jpg'
import jpg3 from '@/assets/4.jpg'
import echarts from 'echarts'
import 'echarts/map/js/china.js'

export default {
  name: 'MapComponent',
  data () {
    return {
      items: [
        { id: 1, image: jpg },
        { id: 2, image: jpg1 },
        { id: 3, image: jpg2 },
        { id: 4, image: jpg3 }
      ],
      chart: null // 用于存储ECharts实例
    }
  },
  created () {
    // 初始化地图
    this.chart = echarts.init(this.$refs.mapContainer)
    this.initMap()
  },
  methods: {
    initMap () {
      // 初始化echarts实例
      this.chinachart = echarts.init(document.getElementById('map-china'))
      // 进行相关配置
      this.chartOption = {
        // geo配置详解： https://echarts.baidu.com/option.html#geo
        geo: {
          // 地理坐标系组件用于地图的绘制
          map: 'china', // 表示中国地图
          // roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
          label: {
            show: true
          },
          itemStyle: {
            // 地图区域的多边形 图形样式。
            borderColor: 'rgba(0, 0, 0, 0.2)',
            emphasis: {
              // 高亮状态下的多边形和标签样式
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            name: '各区域人数', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: 'map',
            geoIndex: 0,
            label: {
              show: true
            },
            // 这是需要配置地图上的某个地区的数据（下面是定义的假数据）
            data: [
              { name: '湖南', value: 3957 },
              { name: '北京', value: 2665 },
              { name: '上海', value: 1647 },
              { name: '江西', value: 79 },
              { name: '河南', value: 1592 },
              { name: '山西', value: 80 },
              { name: '四川', value: 1399 },
              { name: '湖北', value: 1194 },
              { name: '江苏', value: 1162 },
              { name: '内蒙古', value: 1152 },
              { name: '安徽', value: 354 },
              { name: '辽宁', value: 719 },
              { name: '广东', value: 1697 },
              { name: '浙江', value: 602 },
              { name: '济南', value: 535 },
              { name: '陕西', value: 516 },
              { name: '贵州', value: 470 },
              { name: '山东', value: 429 },
              { name: '云南', value: 429 },
              { name: '广西', value: 421 },
              { name: '吉林', value: 400 },
              { name: '南京', value: 353 },
              { name: '重庆', value: 337 },
              { name: '黑龙江', value: 282 },
              { name: '海南', value: 7 },
              { name: '新疆', value: 279 },
              { name: '福建', value: 213 },
              { name: '河北', value: 192 },
              { name: '天津', value: 166 },
              { name: '宁夏', value: 3 },
              { name: '甘肃', value: 8 },
              { name: '青海', value: 11 },
              { name: '西藏', value: 2 }
            ]
          }
        ],
        tooltip: {
          // 鼠标移到图里面的浮动提示框
          // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
          formatter (params, ticket, callback) {
          // params.data 就是series配置项中的data数据遍历
            let localValue
            if (params.data) {
              localValue = params.data.value
            } else {
              // 为了防止没有定义数据的时候报错写的
              localValue = 0
            }
            let htmlStr = `
             <div style='font-size:18px;'> ${params.name}</div>
             <p style='text-align:left;margin-top:-10px;'>
               区域对应数据value：${localValue}<br/>
             </p>
           `
            return htmlStr
          },
          backgroundColor: '#ff7f50', // 提示标签背景颜色
          textStyle: {color: '#fff'} // 提示标签字体颜色
        },
        // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
        visualMap: {
          // 左下角的颜色区域
          type: 'piecewise', // 定义为分段型 visualMap
          min: 0,
          max: 1000,
          itemWidth: 40,
          bottom: 10,
          left: 10,
          pieces: [
            // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，
            // 以及每一段的文字，以及每一段的特别的样式
            { gt: 999, label: '>1000人', color: '#82121b' }, // (1000, ]
            { gt: 100, lte: 999, label: '100-999人', color: '#bb2222' }, // (100, 999]
            { gt: 10, lte: 99, label: '10-99人', color: '#fe7b6c' }, // (10, 99]
            { gt: 0, lte: 9, label: '1-9人', color: '#ffaa85' } // (0, 9]
          ]
        }
      }
      // 使用刚指定的配置项和数据显示地图数据
      this.chinachart.setOption(this.chartOption)
    }

  }

}
</script>

<style>
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #f0f0f0;
}

.search-bar input {
  width: 300px;
  height: 30px;
  padding: 5px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
}

.search-bar button {
  width: 60px;
  height: 40px;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #007aff;
  color: #fff;
  font-size: 16px;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  overflow-x: auto;
  white-space: nowrap;
}

.slide {
  display: inline-block;
  width: 200px;
  height: 180px;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 16px;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .carousel{
    align-items:center
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 300px;

    margin-left: 40px;
  }

</style>
