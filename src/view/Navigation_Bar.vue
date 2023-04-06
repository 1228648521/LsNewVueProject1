<template>
    <div class="header" :style="{ backgroundColor: bgColor }">
      <el-row class="row">
        <el-col :span="3">
          <h1 class="logo">LOGO</h1>
        </el-col>
        <el-col :span="12" class="menu">
          <el-menu mode="horizontal" :default-active="activeIndex" class="el-menu-demo" background-color="transparent" text-color="#fff" active-text-color="#ccc">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3">标签</el-menu-item>
            <el-menu-item index="4">关于我们</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" class="search">
          <el-input placeholder="请输入搜索关键字" suffix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="6">
          <div class="header-right">
            <el-button type="primary" size="medium" class="login">登录</el-button>
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
