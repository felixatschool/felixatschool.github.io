<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import IngredientItem from '../components/ingredientItem.vue'

  const loading = ref(true);
  const ingredients = ref([]);
  const list = ref();

  onMounted( async () => {
    const recipes = await Backend.fetchTheList();
    const ingredientsMap = new Map();

    recipes.ingredientsList.forEach(recipe => {
      recipe.ingredients.forEach(({ name, quantity }) => {
        const existingQuantity = ingredientsMap.get(name) || 0;
        ingredientsMap.set(name, existingQuantity + quantity);
      });
    });

    const list = Array.from(ingredientsMap).map(([name, quantity]) => ({ name, quantity }));
    ingredients.value = list;
    loading.value = false;
  });

</script>
<template>
  <div>
    <Header title="the list"/>
    <div v-if="!loading" class="wrapper">
      <IngredientItem v-for="(item, index) in ingredients" :key="index" :ingredient=item />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  .wrapper {
    width:80vw;
    margin:0 auto;
    max-height:75vh;
    overflow:auto;
  }

</style>
