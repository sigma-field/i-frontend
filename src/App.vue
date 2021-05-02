<template>
  <div id="app" style="background:url('../assets/background.jpg')">
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";
export default {
  components: {
    mrHeader: Header,
    mrFooter: Footer,
    mrHome: Home,
  },
};
</script>
<style lang="scss">
@import "./assets/style.css";
#app {
}
</style>
