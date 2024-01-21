<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import RecipeItem from '../components/recipeItem.vue'

  const loading = ref(true);
  const recipes = ref();

  onMounted( async () => {
    recipes.value = await Backend.fetchRecipes();
    loading.value = false;
  });

</script>
<template>
  <div class="container">
    <Header />
    <h2> calendar </h2>
    <div v-if="!loading" class="wrapper">
      <RecipeItem v-for="(item, index) in recipes" :key="index" :recipe=item />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  h2 {
    color: #333;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size:2rem;
    padding-top:10vh;
    padding-left:10vw;
    padding-bottom:5vh;
  }

  .wrapper {
    width:80vw;
    margin:0 auto;
  }

</style>
