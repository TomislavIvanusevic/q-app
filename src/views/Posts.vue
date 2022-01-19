<template>
  <ArticleList></ArticleList>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleList from '@/components/ArticleList.vue';

export default defineComponent({
  name: 'Posts',
  components: { ArticleList },
});
</script>
