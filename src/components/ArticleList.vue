<template>
  <div>
    <h1>Post list</h1>
    <div class="row" v-if="allPosts.length > 0 && !isLoading">
      <div class="col-12">
        <search-input v-model="searchQuery" />
      </div>
      <div v-for="post in filteredPosts" :key="post.id" class="col-12 col-lg-6">
        <single-article :post="post" />
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12">
        <Loader />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent, computed, ref, onMounted,
} from 'vue';
import state from '@/store';
import SingleArticle from '@/components/SingleArticle.vue';
import SearchInput from '@/components/SearchInput.vue';
import Loader from '@/components/Loader.vue';

export default defineComponent({
  name: 'ArticleList',
  components: { SingleArticle, SearchInput, Loader },

  setup() {
    onMounted(async () => {
      await state.loadAllData();
    });

    const allPosts = computed(() => state.posts);
    const isLoading = computed(() => state.isLoading);
    const searchQuery = ref('');

    const filteredPosts = computed(() => {
      const statePosts = allPosts.value;
      const searchTerm = searchQuery.value.toLowerCase();

      if (searchTerm) {
        return allPosts.value.filter(
          (post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())
            || post.user?.name.toLowerCase().includes(searchTerm.toLowerCase())
            || post.body.toLowerCase().includes(searchTerm),
        );
      }
      return statePosts;
    });

    return {
      allPosts,
      searchQuery,
      isLoading,
      filteredPosts,
    };
  },
});
</script>
