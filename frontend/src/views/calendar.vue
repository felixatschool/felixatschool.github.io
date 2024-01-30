<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import RecipeItem from '../components/recipeItem.vue'

  const props = defineProps({
    data: Object,
  });

  const recipes = props.data.recipes;
  const calendar = props.data.calendar.documents;

</script>
<template>
  <div>
    <Header title="calendar"/>
    <div class="wrapper">
      <RecipeItem v-for="item in calendar" :key="item.id" :data="item" :recipes="recipes"/>
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
