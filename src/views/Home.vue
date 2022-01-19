<template>
  <div class="home">
    <p>Check out the list of <router-link to="/posts">Posts</router-link></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
