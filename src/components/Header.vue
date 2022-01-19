<template>
  <div class="row">
    <div class="col-12">
      <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/posts">Posts</router-link>
      </div>
    </div>
    <div class="col-12">
      <img alt="Q logo" src="../assets/logo.svg"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>
