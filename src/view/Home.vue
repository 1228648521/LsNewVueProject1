<!--
 * @Author: ls shuai.lu@goodark.com
 * @Date: 2023-03-22 14:17:17
 * @LastEditors: ls shuai.lu@goodark.com
 * @LastEditTime: 2023-03-29 10:14:25
 * @FilePath: \vueproject2\src\view\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE

 <template>
  <div>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="hero">
        <h1>Welcome to my website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin, ante eu gravida imperdiet, dolor quam ornare nisi, nec sollicitudin lorem est vel dui.</p>
        <button>Learn More</button>
      </section>
      <section class="features">
        <div class="feature">
          <img src="image1.jpg" alt="Feature 1">
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin, ante eu gravida imperdiet, dolor quam ornare nisi, nec sollicitudin lorem est vel dui.</p>
        </div>
        <div class="feature">
          <img src="image2.jpg" alt="Feature 2">
          <h2>Feature 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin, ante eu gravida imperdiet, dolor quam ornare nisi, nec sollicitudin lorem est vel dui.</p>
        </div>
        <div class="feature">
          <img src="image3.jpg" alt="Feature 3">
          <h2>Feature 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin, ante eu gravida imperdiet, dolor quam ornare nisi, nec sollicitudin lorem est vel dui.</p>
        </div>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 My Website</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Reset default browser styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Set up basic page styles */
body {
  font-family: "Arial", sans-serif;
}

header {
  background-color: #222;
  color: #fff;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-right: 1rem;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

main {
  padding: 2rem;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ccc;
  height: 60vh;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.hero p {
  margin-bottom: 1.5rem;
}
 </style> -->
 <template>
  <div>
    <div class="search-bar">
      <input type="text" placeholder="输入关键词搜索">
      <button>搜索</button>
    </div>
  <div class="image-container">
  <img v-for="(image, index) in images" :key="index" :src="image" :class="{ active: index === currentIndex }" />
</div>
</div>

</template>

<script>
export default {
  data () {
    return {
      // recommendations: ['推荐1', '推荐2', '推荐3', '推荐4', '推荐5'],
      images: ['./image/1.jpg', '@/image/2.jpg'],
      budget: null,
      currentIndex: 0,
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
  },
  created () {
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
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
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 1s;
}
.image-container img.active {
  transform: translateX(0%);
}
.image-container img:not(.active) {
  transform: translateX(-100%);
}
</style>
