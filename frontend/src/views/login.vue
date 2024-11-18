<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import * as Backend from '../composables/backend.js';
  import { library } from "@fortawesome/fontawesome-svg-core";

  const router = useRouter();

  const email = ref('');
  const password = ref('');
  const loading = ref(true);
  const signin = ref(true);
  const err = ref('');
  const page = reactive({
    title: "Sign in",
    action: "login",
    btn: "create an account",
    load: false
  });

  onMounted( async () => {
    await Backend.isAuth();
    loading.value = false;
  });

  const login = async () => {
    try {
      page.load = true;
      validateInput();
      await Backend.login(email.value, password.value, page.action);
    } catch (e) {
      page.load = false;
      err.value = e;
      console.log(e);
    }
  }

  const toggleMode = () => {
    if(page.title == "Sign up") {
      page.btn = "create an account";
      page.title = "Sign in";
      page.action = "login";
    } else {
      page.btn = "login";
      page.title = "Sign up";
      page.action = "create account";
    }
  };

  const validateInput = () => {
    if( email.value.length == 0 || password.value.length == 0){
      throw 'Please enter email and password';
    }
  }

</script>

<template>
  <div v-if="!loading" class="login-box">
    <h2> {{ page.title }} </h2>
    <div class="err"> {{ err }} </div>
    <form @submit.prevent="">
      <input type="text" v-model="email" required placeholder="email"/>
      <input type="password" v-model="password" required placeholder="password"/>
    </form>
    <button v-if="!page.load" @click="login()"> {{ page.action }} </button>
    <button v-else>
      <font-awesome-icon icon="fa-solid fa-spinner" spin />
    </button>
    <div class="action"> <h4 @click="toggleMode()" class="mode"> {{ page.btn }} </h4> </div>
    <p class="version"> v1.3.2 </p>
  </div>
</template>

<style scoped>
  .login-box {
    max-width:420px;
    width:75vw;
    margin:0 auto;
    margin-top:15vh;
  }

  h4 {
    cursor:pointer;
  }

  .version {
    position:absolute;
    bottom:0;
    right:0;
    font-size:8px;
  }

  .err {
    display:inline-block;
    margin-top:25px;
    min-height:1.5rem;
    display:flex;
    justify-content:center;
    font-size:0.9rem;
  }

  .mode {
    position:absolute;
    bottom:10%;
    left:50%;
    transform:translate(-50%, -50%);
  }

  h2 {
    color: #333;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size:2rem;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 16px;
    margin:3px auto;
    text-align:center;
    font-size:16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  button {
    width: 60%;
    display:block;
    padding: 10px;
    margin:10px auto;
    border: none;
    border-radius: 16px;
    background-color: #be2ed6;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    font-size:16px;
  }

  @media (prefers-color-scheme: dark) {
    h2 {
      color:#0071C5;
    }
    button {
      background-color:#0071C5;
    }
    input {
      background-color:#2A2A2A;
      border:1px solid #2A2A2A;
    }
  }
</style>
