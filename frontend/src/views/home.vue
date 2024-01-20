<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import * as Backend from '../composables/backend.js';

  const router = useRouter();
  const loading = ref(true);

  onMounted( async () => {
    if(!await Backend.isAuth()){
      router.push( { name: 'login' });
    };
    loading.value = false;
  });

  const signout = () => {
    Backend.removeAccessToken();
    router.push( { name: 'login' });
  }
</script>

<template>
  <div v-if="!loading">
    <h2> khdr. </h2>
    <button @click="signout()">sign out</button>
  </div>
</template>

<style scoped>
h2 {
  font-family: 'Quicksand', sans-serif; /* Default weight (300) */
  font-weight: 700; /* Bold weight (700) */
  font-size:4rem;
}
</style>
