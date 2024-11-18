<script setup>
  import { watch } from 'vue';
  import { RouterView } from 'vue-router';
  import Login from './views/login.vue';
  import Footer from './components/footer.vue';
  import * as Store from './composables/store.js';

  const data = Store.getData();

</script>

<template>
  <div class="app">
    <Login v-if="data.user.token == null"/>
    <div v-else class="container">
      <div class="content">
        <RouterView :data="data" />
      </div>
      <Footer class="footer"/>
    </div>
  </div>
</template>

<style>

  .app {
    height:100dvh;
    display:flex;
    flex-direction:column;
    overflow:hidden;
  }

  .container {
    display:flex;
    flex-direction:column;
    height:100%;
  }

  .content {
    flex: 1;
    margin-top:10px;
    overflow-y:auto;
    padding:0 1rem;
  }

  .footer {
    height:8%;
    width:100%;
    flex-shrink:0;
    position:sticky;
    z-index:10;
  }




  @media (prefers-color-scheme: dark) {
    * {
      color:#bbb;
    }
  }
</style>
