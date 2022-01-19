<template>
  <div class="article-card" v-if="post">
      <h2 class="article-card__title">
        <router-link
          :to="{name: 'Post', params: {id: post.id}}"
            >
          {{post.title}}
        </router-link>
      </h2>
      <p class="article-card__text">
        {{post.body}}
      </p>
      <p class="article-card__author" v-if="post.user">{{post.user.name}}</p>
      <div class="article-card__comments" v-if="post.comments?.length">
        <h4 class="article-card__comments-title">Comments ({{post.comments.length}}):</h4>
        <div class="article-card__comments-item" v-for="comment in post.comments" :key="comment.id">
          <h5 class="article-card__comments-title">{{comment.name}} - {{comment.email}}</h5>
          <p class="article-card__comments-text">{{comment.body}}</p>
          <hr>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Post from '@/types/post';

export default defineComponent({
  name: 'SingleArticle',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.article-card {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 10px;
  margin-top: 16px;
  text-align: left;
  background: white;

  &__title {
    text-transform: capitalize;

    a {
      color: #000;
    }
  }

  &__author {
    margin: 0;
    font-size: 11px;
    text-align: right;
    font-style: italic;
  }

  &__text {
    font-weight: 300;
  }

  &__comments {
    display: flex;
    flex-direction: column;

    &-title {
      margin-bottom: 0;
    }

    &-text {
      margin: 5px 0;
    }
  }

  &__comments-item {
      display: flex;
      flex-direction: column;
      margin-top: 6px;
      border-bottom: 1px solid #e8e8e8;
      font-weight: 300;

      &:last-child {
        border-bottom: none;
      }
    }
}
</style>
