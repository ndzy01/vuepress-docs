<script setup lang="ts">
import { ref, watch, toRefs } from 'vue';

const props = defineProps({ msg: String });
const { msg } = toRefs(props);
const show = ref(false);
const className = ref('hide');
const click = () => {
  show.value = !show.value;
};
watch(show, (a) => {
  if (a) {
    className.value = 'show';
  } else {
    className.value = 'hide';
  }
});
</script>

<template>
  <div class="my-8">
    <a-tag color="orange" @click="click">{{ msg || '代码片段' }}</a-tag>
    <div :class="className">
      <slot></slot>
    </div>
  </div>
</template>
