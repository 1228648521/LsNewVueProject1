<template>
    <div>
      <!-- 顶部搜索框 -->
      <div class="search-bar">
        <input type="text" placeholder="输入关键词搜索">
        <button>搜索</button>
      </div>

      <!-- 中间热门推荐滚动图 -->
      <div class="hot-recommendations">
        <h2>热门推荐</h2>
        <div class="slider">
          <div v-for="(item, index) in recommendations" :key="index" class="slide">{{ item }}</div>
        </div>
      </div>

      <!-- 预算、地点、天数表单 -->
      <div class="form">
        <label>预算：</label>
        <input type="number" v-model="budget">
        <label>地点：</label>
        <input type="text" v-model="location">
        <label>天数：</label>
        <input type="number" v-model="days">
        <button @click="submitForm">提交</button>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      recommendations: ['推荐1', '推荐2', '推荐3', '推荐4', '推荐5'],
      budget: null,
      location: '',
      days: null
    }
  },
  methods: {
    submitForm () {
      // 处理表单提交逻辑
      console.log('提交表单：', {
        budget: this.budget,
        location: this.location,
        days: this.days
      })
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

  .hot-recommendations {
    margin: 50px 0;
    text-align: center;
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
  }</style>
