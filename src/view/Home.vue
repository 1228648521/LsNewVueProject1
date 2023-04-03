<!--
 * @Author: ls shuai.lu@goodark.com
 * @Date: 2023-03-22 14:17:17
 * @LastEditors: ls shuai.lu@goodark.com
 * @LastEditTime: 2023-04-03 10:24:00
 * @FilePath: \vueproject2\src\view\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

 <template>
  <div>
    <div class="search-bar">
      <input type="text" placeholder="输入关键词搜索">
      <button>搜索</button>
    </div>

  <el-container  :delay="100">
    <el-aside width="700px">
      <div class="hot-recommendation">
    <el-tabs v-model="activeTab1" >
      <el-tab-pane label="热门推荐" name="movie" >
        <!-- <div  justify-content: center>
          <div id="map-china" ></div>
        </div> -->
        <hot-city />
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
    <el-aside width="700px" >
      <el-tabs v-model="activeTab1" >
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
import HotCity from './HotCity.vue'

export default {
  components: { HotCity },
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
  },
  methods: {

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

  }

.bm-view {
  width: 100%;
  height: 300px;
}
</style>
