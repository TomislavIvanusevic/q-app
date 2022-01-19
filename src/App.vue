<template>
<div class="container">
  <Header/>
  <router-view/>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'App',
  components: { Header },
});
</script>

<style lang="scss">
@import 'assets/bootstrap-grid.css';
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;700&display=swap');
#app {
  display: flex;
  min-height: 100vh;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
}

body {
  margin: 0;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
