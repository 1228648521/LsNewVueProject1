<!--
 * @Author: ls shuai.lu@goodark.com
 * @Date: 2023-03-22 14:17:17
 * @LastEditors: ls shuai.lu@goodark.com
 * @LastEditTime: 2023-03-29 09:07:35
 * @FilePath: \vueproject2\src\view\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

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
 </style>
