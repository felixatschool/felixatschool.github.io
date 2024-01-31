<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import * as Backend from '../composables/backend.js';
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import IngredientItem from '../components/ingredientItem.vue'

  const props = defineProps({
    data: Object,
  });

  const list = props.data.list.documents;

</Script>
<template>
  <div>
    <Header title="the list"/>
    <div class="wrapper">
      <IngredientItem v-for="(item, index) in list" :key="index" :ingredient=item />
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
