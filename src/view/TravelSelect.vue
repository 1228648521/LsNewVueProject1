<template>
  <div class="container">
    <h2>选择旅游景点</h2>
    <el-select v-model="traffic" placeholder="人流量" size="mini">
      <el-option label="少" value="low"></el-option>
      <el-option label="中等" value="medium"></el-option>
      <el-option label="多" value="high"></el-option>
    </el-select>
    <el-select v-model="ease" placeholder="路线难易度" size="mini">
      <el-option label="较难" value="difficult"></el-option>
      <el-option label="一般" value="moderate"></el-option>
      <el-option label="容易" value="easy"></el-option>
    </el-select>
    <el-select v-model="time" placeholder="游玩时间" size="mini">
      <el-option label="半天以内" value="short"></el-option>
      <el-option label="一天以内" value="medium"></el-option>
      <el-option label="一天以上" value="long"></el-option>
    </el-select>
    <el-button type="primary" @click="submit" size="mini">提交</el-button>
    <div v-if="showResult" class="result-container">
      <h3>{{ result.title }}</h3>
      <p>{{ result.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      traffic: '',
      ease: '',
      time: '',
      showResult: false,
      result: {}
    }
  },
  methods: {
    submit () {
      if (!this.traffic || !this.ease || !this.time) {
        this.$message.error('请选择所有选项')
        return
      }

      let title = ''
      let description = ''
      if (this.traffic === 'low' && this.ease === 'easy' && this.time === 'short') {
        title = '西湖'
        description = '杭州市区著名的风景名胜区，有着丰富的人文历史和自然景观'
      } else if (this.traffic === 'medium' && this.ease === 'moderate' && this.time === 'medium') {
        title = '千岛湖'
        description = '中国南方著名的大型水库和风景区，以其独特的千岛湖水系著名'
      } else if (this.traffic === 'high' && this.ease === 'difficult' && this.time === 'long') {
        title = '峨眉山'
        description = '四川省境内的一座名山，以其险峻的山势、多姿多彩的景观和悠久的历史文化而闻名于世'
      } else {
        title = '无合适景点'
        description = '根据您的选择，目前没有合适的旅游景点'
      }

      this.result = {
        title: title,
        description: description
      }
      this.showResult = true
    }
  }
}
</script>

<style scoped>
.container {
  display: inline;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.result-container {
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  background-color: #f5f5f5;
}
.result-container h3 {
  font-size: 24px;
  margin-bottom: 10px;
}
.result-container p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
