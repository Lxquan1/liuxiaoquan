<template>
  <div>
    <el-container>
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu background-color="rgb(50,64,87)" text-color="#ffffff" :router="true">
          <!-- 一级菜单 -->
          <el-menu-item class="item" index="/">
            <i class="el-icon-menu"></i>
            <span slot="title" >首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"> 用户列表</el-menu-item>
              <el-menu-item index="2-2"> 商家列表</el-menu-item>
              <el-menu-item index="2-3"> 食品列表</el-menu-item>
              <el-menu-item index="2-4"> 订单列表</el-menu-item>
              <el-menu-item index="2-5"> 管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <!-- 二级菜单添加数据 -->
          <el-submenu index="3" class="item">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1"> 添加用户</el-menu-item>
              <el-menu-item index="3-2"> 添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <!-- 二级菜单图标分布 -->
          <el-submenu index="4" class="item">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>图标分布</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1"> 用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <!-- 二级菜单编辑 -->
          <el-submenu index="5" class="item">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1"> 文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <!-- 二级菜单设置 -->
          <el-submenu index="6" class="item">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1"> 管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <!-- 二级菜单说明 -->
          <el-submenu index="7" class="item">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1"> 说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="headr">
          <!-- 面包屑 -->
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item
                v-for="(item, index) in this.$route.meta"
                :key="index"
                >{{ item }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>
          <!--图像下拉 -->
          <div>
            <el-dropdown>
              <img src="@/assets/logo.png" alt="" class="img" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <!-- 二级路由出口组件 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  mounted() {
    console.log(this.$route.meta);
  },
};
</script>

<style scoped>
.aside {
  height: 100vh;
}
.aside .item {
  background-color: rgb(50, 64, 87);
  color: #fff;
}
/* .aside .item:hover{
  background-color: #f5f5f5;
  color: #000;
} */
.aside .item span {
  color: #fff;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.headr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eff2f7;
}
.header div {
}
</style>
