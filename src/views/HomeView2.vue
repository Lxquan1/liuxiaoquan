<template>
  <div class="home">
    <el-container>
      <el-aside>
        <el-menu>
          <!-- 菜单组件 -->
          <el-submenu index="1">
          
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>上</el-header>
        <el-main>主</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
import MyButton from "@/components/MyButton.vue";
export default {
  name: "HomeView",
  components: {
    MyButton,
  },
  mounted() {
    // this.cuiplugin()
  },
};
</script>
