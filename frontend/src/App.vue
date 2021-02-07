<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <PostMeme />
  </div>
</template>

<script>
import PostMeme from "./components/PostMemeComponent.vue";

export default {
  name: "App",
  components: {
    PostMeme
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
