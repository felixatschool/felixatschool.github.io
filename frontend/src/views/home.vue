<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import * as Backend from '../composables/backend.js';

  const router = useRouter();
  const loading = ref(true);

  onMounted( async () => {
    if(!await Backend.isAuth()){
      router.push( { name: "login" });
    };
    loading.value = false;
  });
</script>

<template>
  <div v-if="!loading">
    <h2> home </h2>
  </div>
</template>
