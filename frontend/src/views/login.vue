<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const router = useRouter();

  const email = ref('');
  const password = ref('');

  const signIn = async () => {
    try{
      await login();
      //let user = auth.currentUser;
      router.push( { name: "Home" });

    } catch (e) {
      console.log(e);
    }
  }

  const login = async () => {
    try {
      const apiUrl = 'https://northamerica-northeast1-upbeat-aspect-410421.cloudfunctions.net/proxyFunction';
      const resp = await axios.post(apiUrl, {
          email: email.value,
          password: password.value,
      });
      console.log(resp.data)
    } catch (e) {
      throw e;
    }
  }

</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="text" v-model="email" id="email" required />

        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />

        <button @click="signIn()">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
  }

  .login-card {
    max-width: 300px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    color:black;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 8px;
    color:black;
  }

  input {
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    background-color: #02559f;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }
</style>
