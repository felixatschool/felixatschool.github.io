<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import * as Backend from '../composables/backend.js';

  const router = useRouter();
  const loading = ref(true);
  const user = ref();

  onMounted(async () => {
    user.value = await Backend.fetchUser();
    loading.value = false;
  });

  const signout = () => {
    Backend.removeAccessToken();
    router.push( { name: 'login' });
  }

</script>

<template>
  <Header />
  <div>
    <Header title="Home"/>
    <div v-if="!loading" class="wrapper">
      <div class="content">
	<button class="submit-button" @click="signout()">sign out</button>
	<p> {{ user.name }} </p>
	<p> {{ user.email }} </p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
  .wrapper {
    width:100vw;
    display:flex;
    justify-content:center;
    height:65vh;
    overflow:auto;
  }

  .content {
    width:80vw;
    margin:0 auto;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 20px;
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
