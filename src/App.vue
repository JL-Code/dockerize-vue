<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Nginx 如何处理一个请求？" />
    <AxiosTest />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AxiosTest from "./views/AxiosTest.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AxiosTest,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
