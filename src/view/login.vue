<!-- <template>
    <div>
      <div class="search-bar">
        <input type="text" placeholder="输入关键词搜索">
        <button>搜索</button>
      </div>

      <div class="hot-recommendations">
        <h2>热门推荐</h2>
        <div class="slider">
          <div v-for="(item, index) in recommendations" :key="index" class="slide">{{ item }}</div>
        </div>
      </div>

      <div class="form">
        <label>预算：</label>
        <input type="number" v-model="budget">
        <label>地点：</label>
        <input type="text" v-model="location">
        <label>天：</label>
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
  }</style> -->
  <template>
    <div class="login-container">
      <form class="login-form" @submit.prevent="submitForm">
        <h2 class="login-title">登录</h2>
        <div class="form-group">
          <label for="username">用户名</label>
          <input id="username" type="text" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input id="password" type="password" v-model="password" required autocomplete="current-password">
        </div>
        <button class="login-btn" type="submit" id="asd" >登录</button>
        <button class="login-btn" type="primary" >注册</button>
      </form>
    </div>
  </template>
<script>

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // submitForm () {
    //   // 提交表单的逻辑，例如发起登录请求
    //   this.$router.push('/home')
    // }
    submitForm () {
      // 模拟验证用户名和密码
      if (this.username === 'admin' && this.password === 'admin') {
        // 验证通过，跳转到主页面
        this.$router.push('/home')
      } else {
        // 验证失败，提示用户重新输入
        alert('请输入正确的用户名或密码')
      }
    }
  }
}
</script>

  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  .login-form {
    width: 360px;
    padding: 40px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .login-title {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  .form-group {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
  }
  input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s ease;
  }
  input:focus {
    border-color: #007aff;
  }
  .login-btn {
    width: 30%;
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007aff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  .login-btn:hover {
    background-color: #006be0;
  }
  </style>
