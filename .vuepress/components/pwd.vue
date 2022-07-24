<script setup lang="ts">
import { ref, watch } from 'vue';

const val = ref('');
watch(val, (a) => {
  window.localStorage.setItem('flag', a);
});
</script>

<template>
  <a-input v-model:value="val" placeholder="请输入密码" />
</template>
