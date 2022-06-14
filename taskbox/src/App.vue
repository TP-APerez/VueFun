<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <InboxScreen />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import InboxScreen from "./components/InboxScreen.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    InboxScreen,
  }
};
</script>

<style>
@import "./index.css";
</style>
