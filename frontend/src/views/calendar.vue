<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import RecipeItem from '../components/recipeItem.vue'

  const loading = ref(true);
  const calendar = ref();
  const recipes = ref();

  onMounted( async () => {
    calendar.value = await Backend.fetchCalendar();
    recipes.value = await Backend.fetchRecipes();
    loading.value = false;
  });

</script>
<template>
  <div>
    <Header title="calendar"/>
    <div v-if="!loading" class="wrapper">
      <RecipeItem v-for="item in calendar.documents" :key="item.id" :data="item" :recipes="recipes"/>
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
