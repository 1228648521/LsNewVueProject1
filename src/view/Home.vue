<!--
 * @Author: ls shuai.lu@goodark.com
 * @Date: 2023-03-22 14:17:17
 * @LastEditors: ls shuai.lu@goodark.com
 * @LastEditTime: 2023-04-03 16:07:45
 * @FilePath: \vueproject2\src\view\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
 <template>
  <div>
      <NavigationBar />
    <el-row :gutter="12" style="margin:20px">
      <el-col :lg="11" :md="12" :sm="24">
        <el-tabs v-model="activeTab1"  >
      <el-tab-pane label="热门推荐" name="HotCity" >
        <hot-city />
      </el-tab-pane>
      <el-tab-pane label="三维定位" name="3DLocation">

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
      </el-col>
      <el-col :lg="11" :md="12" :sm="24">
        <el-tabs v-model="activeTab2"  >
      <el-tab-pane label="标签页 1" name="first">这是标签页 1 的内容</el-tab-pane>
      <el-tab-pane label="标签页 2" name="second">这是标签页 2 的内容</el-tab-pane>
      <el-tab-pane label="标签页 3" name="thrth">这是标签页 3 的内容</el-tab-pane>
    </el-tabs>
      </el-col>

    </el-row>

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
import HotCity from './HotCity.vue'
import NavigationBar from './Navigation_Bar.vue'

export default {
  components: { HotCity, NavigationBar },
  data () {
    return {
      items: [
        { id: 1, image: jpg },
        { id: 2, image: jpg1 },
        { id: 3, image: jpg2 },
        { id: 4, image: jpg3 }
      ],
      chart: null, // 用于存储ECharts实例
      activeTab1: 'HotCity',
      activeTab2: 'first'
    }
  },
  created () {
    // 开始时候的处罚的

  },
  methods: {
    // 主方法

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

  .carousel{
    align-items:center
  }

  /* .el-tabs {
    background-color: #D3DCE6;
    color: #333;
    height: 300px;

  } */

.bm-view {
  width: 100%;
  height: 300px;
}
</style>
