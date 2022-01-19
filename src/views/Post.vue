<template>
  <div class="row">
    <div class="col-12">
      <single-article v-if="post.id" :post="post" />
      <loader v-else />
    </div>
  </div>
</template>

<script lang='ts'>
import {
  computed, defineComponent, onMounted, ref,
} from 'vue';
import SingleArticle from '@/components/SingleArticle.vue';
import { useRoute } from 'vue-router';
import Post from '@/types/post';
import state from '@/store';
import Loader from '@/components/Loader.vue';

export default defineComponent({
  name: 'Post',
  components: { SingleArticle, Loader },

  setup() {
    const route = useRoute();
    const postId = route.params.id;
    const post = ref<Post[]>([]);
    const isLoading = computed(() => state.isLoading);

    onMounted(async () => {
      const postData = await state.loadSinglePost(Number(postId));
      post.value = postData as Post[];
    });

    return {
      post,
      isLoading,
    };
  },
});
</script>
