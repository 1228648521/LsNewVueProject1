<!--
 * @Author: ls shuai.lu@goodark.com
 * @Date: 2023-03-22 14:17:17
 * @LastEditors: ls shuai.lu@goodark.com
 * @LastEditTime: 2023-03-28 15:50:31
 * @FilePath: \vueproject2\src\view\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
    <template>
        <div class="login-container">
          <form class="login-form" @submit.prevent="submitForm">
            <h2 class="login-title">asd</h2>
            <div class="form-group">
              <label for="username">asd</label>
              <input id="username" type="text" v-model="username" required>
            </div>
            <div class="form-group">
              <label for="password">asd</label>
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
