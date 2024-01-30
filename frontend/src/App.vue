<script setup>
  import { watch } from 'vue'
  import { RouterView } from 'vue-router'
  import Login from './views/login.vue'
  import * as Store from './composables/store.js';
  const data = Store.getData();
</script>

<template>
  <Login v-if="data.user.token == null"/>
  <div v-else>
    <RouterView :data="data" />
  </div>
</template>
