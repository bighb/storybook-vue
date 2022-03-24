<template>
  <div id="app">
      我是主页
    <Avatar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Avatar from "./components/Avatar/Avatar.vue";

export default {
  name: "App",
  components: {
    Avatar
  }
};
</script>

<style>
@import "./index.css";
</style>
