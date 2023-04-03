<!-- <template>
    <div class="nav-container">
      <div class="nav-header">
        <div class="logo">
          <img src="/assets/logo.png" alt="Logo">
        </div>
        <div class="nav-items">
          <el-menu
            :default-active="activeIndex"
            class="nav-menu"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="product">产品</el-menu-item>
            <el-menu-item index="about">关于</el-menu-item>
          </el-menu>
        </div>
        <div class="nav-user">
          <el-input
            class="nav-search"
            placeholder="请输入搜索内容"
            suffix-icon="el-icon-search"
            @search="handleSearch"
          />
          <el-button class="nav-btn" type="text" icon="el-icon-user" @click="handlePersonalInfo">个人信息</el-button>
          <el-button class="nav-btn" type="text" icon="el-icon-view" @click="handleLogin">登录</el-button>
          <el-button class="nav-btn" type="text" icon="el-icon-edit" @click="handleRegister">注册</el-button>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      activeIndex: 'home'
    }
  },
  methods: {
    handleSelect (index) {
      this.activeIndex = index
    },
    handleSearch (value) {
      console.log(`搜索内容：${value}`)
    },
    handlePersonalInfo () {
      console.log('点击个人信息')
    },
    handleLogin () {
      console.log('点击登录')
    },
    handleRegister () {
      console.log('点击注册')
    }
  }
}
</script>

  <style scoped>
  .nav-container {
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 24px;
  }

  .logo img {
    height: 32px;
    width: auto;
  }

  .nav-menu {
    margin-left: 24px;
  }

  .nav-user {
    display: flex;
    align-items: center;
  }

  .nav-search {
    width: 200px;
    margin-right: 24px;
  }

  .nav-btn {
    margin-right: 8px;
  }
  </style> -->
  <!-- 2
  <template>
    <div class="navigation">
      <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">用户</template>
          <el-menu-item index="2-1">登录</el-menu-item>
          <el-menu-item index="2-2">注册</el-menu-item>
          <el-menu-item index="2-3">个人信息</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">帮助中心</el-menu-item>
        <el-menu-item index="4">联系我们</el-menu-item>
        <el-menu-item index="5" class="search">
          <el-input
            placeholder="请输入搜索内容"
            suffix-icon="el-icon-search"
            v-model="searchText"
            @keyup.enter.native="handleSearch"
          ></el-input>
        </el-menu-item>
      </el-menu>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      searchText: ''
    }
  },
  methods: {
    handleSelect (index) {
      this.activeIndex = index
    },
    handleSearch () {
      alert('您搜索的内容是：' + this.searchText)
    }
  }
}
</script>

  <style>
  .navigation {
    border-bottom: 1px solid #e6e6e6;
    background-color: #f8f8f8;
  }
  .menu {
    line-height: 60px;
    border: none;
  }
  .el-menu-item.is-active,
  .el-submenu.is-active > .el-submenu__title {
    background-color: #f8f8f8;
  }
  .el-menu-item {
    padding: 0 15px;
    font-size: 14px;
  }
  .el-submenu__title {
    font-size: 14px;
  }
  .search {
    float: right;
    width: 300px;
    padding: 0;
    margin-right: 30px;
  }
  </style> -->
  <!-- <template>
    <div class="nav-bar">
      <div class="logo">
        <img src="/assets/logo.png" alt="logo" />
        <span>My Website</span>
      </div>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="product">产品</el-menu-item>
        <el-menu-item index="service">服务</el-menu-item>
        <el-menu-item index="about">关于我们</el-menu-item>
      </el-menu>
      <div class="user-info">
        <el-button v-if="!isLogin" type="primary" @click="handleLogin">登录</el-button>
        <el-button v-if="!isLogin" type="info" @click="handleRegister">注册</el-button>
        <el-dropdown v-if="isLogin" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-user"></i>
            {{ username }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">个人信息</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-input v-model="searchText" placeholder="请输入关键字" suffix-icon="el-icon-search" @search="handleSearch"></el-input>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      activeIndex: 'home',
      isLogin: false,
      username: '',
      searchText: ''
    }
  },
  methods: {
    handleSelect (index) {
      this.activeIndex = index
    },
    handleLogin () {
      // TODO: 处理登录逻辑
      this.isLogin = true
      this.username = 'John Doe'
    },
    handleRegister () {
      // TODO: 处理注册逻辑
    },
    handleCommand (command) {
      if (command === 'profile') {
        // TODO: 处理个人信息逻辑
      } else if (command === 'logout') {
        this.isLogin = false
        this.username = ''
        // TODO: 处理退出登录逻辑
      }
    },
    handleSearch () {
      // TODO: 处理搜索逻辑
      console.log(`搜索关键字：${this.searchText}`)
    }
  }
}
</script>

  <style>
  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .user-info {
    display: flex;
    align-items: center;
  }

  .el-input {
    width: 200px;
    margin-left: 20px;
  }
  </style> -->
  <template>
    <div class="header" :style="{ backgroundColor: bgColor }">
      <el-row class="row">
        <el-col :span="6">
          <h1 class="logo">LOGO</h1>
        </el-col>
        <el-col :span="12" class="menu">
          <el-menu mode="horizontal" :default-active="activeIndex" class="el-menu-demo" background-color="transparent" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3">标签</el-menu-item>
            <el-menu-item index="4">关于我们</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" class="search">
          <el-input placeholder="请输入搜索关键字" suffix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="24">
          <div class="header-right">
            <el-button type="text" size="medium" class="login">登录</el-button>
            <el-button type="primary" size="medium" class="register">注册</el-button>
            <el-dropdown trigger="click" class="dropdown">
              <span class="el-dropdown-link">
                <img src="https://avatars.githubusercontent.com/u/38901839?s=60&amp;v=4" alt="" class="avatar">
                <span class="name">Username</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      activeIndex: '1', // 默认选中菜单项
      bgColor: '#409EFF' // 背景颜色
    }
  },
  methods: {}
}
</script>

  <style scoped>
  .header {
    padding: 15px;
    color: #fff;
    font-size: 16px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
  }

  .menu {
    display: flex;
    justify-content: center;
  }

  .search {
    display: flex;
    justify-content: flex-end;
  }

  .el-menu-demo {
    border-bottom: none;
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .name {
    margin-right: 5px;
  }

  .dropdown {
    margin-left: 10px;
  }
  </style>
