<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由，也可以引用其他子应用 -->
      <el-menu-item index="/">主基座</el-menu-item>
      <!-- 引用其他子应用 -->
      <el-menu-item index="/vue/">vue应用</el-menu-item>
    </el-menu>
    <!-- 加载默认切换 -->
    <router-view></router-view>
    <!-- 用于显示vue自已公用内容 -->
    <div id="vue">
      
    </div>
  </div>
</template>

<style>

</style>
