<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import * as Backend from '../composables/backend.js';

  const router = useRouter();
  const loading = ref(false);

  const signout = () => {
    Backend.removeAccessToken();
    router.push( { name: 'login' });
  }

</script>

<template>
  <Header />
  <div>
    <Header title="Home"/>
    <div class="wrapper">
      <button class="submit-button" @click="signout()">sign out</button>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
  .wrapper {
    width:100vw;
    display:flex;
    justify-content:center;
  }

  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
  }

</style>
