<template>
  <div class="home">home page {{ user.name }}</div>
</template>

<script setup lang="ts">
import { useLoggedInUserStore } from '@/store/loggedInUser';

const user = useLoggedInUserStore();
</script>

<style lang="less" scoped>
.home {
  color: #f00;
}
</style>
