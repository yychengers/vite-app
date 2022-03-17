<template>
  <div class="home">about page</div>
</template>

<script setup lang="ts">
import { useLoggedInUserStore } from '@/store/loggedInUser';

const user = useLoggedInUserStore();

console.log(user.name, 'user');
</script>

<style lang="less" scoped>
.home {
  color: #f0f;
}
</style>
