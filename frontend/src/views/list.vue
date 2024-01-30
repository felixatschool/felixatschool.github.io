<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import IngredientItem from '../components/ingredientItem.vue'

  const props = defineProps({
    data: Object,
  });

  const loading = ref(true);
  const ingredients = ref([]);
  const list = ref();

  onMounted( async () => {
    const recipes = props.data.list.documents;
    const ingredientsMap = new Map();

    recipes.forEach(recipe => {
      recipe.ingredients.forEach(({ name, quantity }) => {
        const existingQuantity = ingredientsMap.get(name) || 0;
        ingredientsMap.set(name, existingQuantity + quantity);
      });
    });

    const list = Array.from(ingredientsMap).map(([name, quantity]) => ({ name, quantity }));
    ingredients.value = list;
    loading.value = false;
  });

</Script>
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
