<template>
  <input
    type="text"
    class="search-input"
    placeholder="Search by title, username, content"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchInput',
  props: {
    modelValue: {
      type: String,
    },
  },
});
</script>

<style scoped lang="scss">
.search-input {
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 16px;
  line-height: 24px;
  font-size: 16px;
  box-sizing:border-box;
    -moz-box-sizing:border-box;
}
</style>
