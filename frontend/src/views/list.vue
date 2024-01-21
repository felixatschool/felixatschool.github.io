<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import IngredientItem from '../components/ingredientItem.vue'

  const loading = ref(true);
  const recipes = ref();
  const ingredients = [];

  onMounted( async () => {
    recipes.value = await Backend.fetchRecipes();
    recipes.value.forEach( recipe => {
      recipe.data.ingredients.forEach( ing => {
	const exist = ingredients.find(item => item.name === ing.name);
	if (exist) {
	  exist.count += ing.quantity;
	} else {
	  ingredients.push({name: ing.name, quantity: ing.quantity});
	}
      });
    });
    loading.value = false;
  });

</script>
<template>
  <div class="container">
    <Header />
    <h2> list </h2>
    <div v-if="!loading" class="wrapper">
      <IngredientItem v-for="(item, index) in ingredients" :key="index" :ingredient=item />
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
    padding-bottom:5vh;
    padding-left:10vw;
  }

  .wrapper {
    width:80vw;
    margin:0 auto;
  }

</style>
